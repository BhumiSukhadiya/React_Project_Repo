import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Test.scss';
import { connect } from 'react-redux';
import { incCounter } from './Test_route.action';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
const App = (props, context) => {
  //console.log(props, context);
  return (
    <div>
      App Component
    </div>
  );
};
App.contextTypes = {
  currentUser: PropTypes.string
};
class Greeting extends React.Component {
  static contextTypes = {
    currentUser: PropTypes.string
  };
  render() {
   // console.log(this.props, this.context);
    if (!this.props.name) {
      return <h2>Connecting...</h2>;
    }
    return <h2>Hi {this.context.currentUser}!<App /></h2>;
  }
}



const Enhancer = (ComposedComponent) => {
  class BaseFilter extends React.Component {
    static childContextTypes = {
      currentUser: PropTypes.string,
    };

    getChildContext() {
      return { currentUser: 'robert' };
    }

    render() {
      const name = { name: 'Robert' };
      return (
        <div className="root">
          <div className="container">
            <ComposedComponent
              {...this.props}{...name}
            />
          </div>
        </div>
      );
    }
  }
  const mapDispatchToProps = dispatch => bindActionCreators({ incCounter }, dispatch);
  const mapStateToProps = state => ({ counter: state.counter.counter });
  return connect(mapStateToProps, mapDispatchToProps)(BaseFilter);
};

const GreetingComponent = Enhancer(Greeting);


export default withStyles(s)(GreetingComponent);


/* class App extends React.Component{
 render(){
 return (
 <div className="root">
 <div className="container">
 <h2>{this.props.counter}</h2>
 <button onClick={this.props.incCounter}>Increment</button>
 </div>
 </div>
 )
 }
 }

 const mapDispatchToProps=(dispatch)=>  bindActionCreators({incCounter}, dispatch);
 const mapStateToProps=(state)=> ({counter: state.counter.counter});
 export default connect(mapStateToProps, mapDispatchToProps)((withStyles(s))(App));*/

/* ----access child component in parent
class Input extends React.Component {
  focus=()=> {
    this.el.focus();
  }

  render() {
    return (
      <input
        ref={el=> { this.el = el; }}
      />
    );
  }
}
class SignInModal extends React.Component {
  constructor(){
    super();
    this.state={
      inp:0
    }
  }
  componentDidMount() {
    // Note that when you use ref on a component, it’s a reference to
    // the component (not the underlying element), so you have access to its methods.
    this.InputComponent0.focus();
  }
  clickNext=()=> {
    this.setState(prevState=>({inp:prevState.inp+1}),()=>this['InputComponent'+this.state.inp].focus());

  }

  render() {
    return (
      <div>
        <label>User name:</label>
        <Input
          ref={comp => { this.InputComponent0 = comp; }}
        />
        <Input
          ref={comp => { this.InputComponent1 = comp; }}
        />
        <Input
          ref={comp => { this.InputComponent2 = comp; }}
        />
        <Input
          ref={comp => { this.InputComponent3 = comp; }}
        />
        <Input
          ref={comp => { this.InputComponent4 = comp; }}
        />
        <Input
          ref={comp => { this.InputComponent5 = comp; }}
        />
        <Input
          ref={comp => { this.InputComponent6 = comp; }}
        />
        <h3><button onClick={this.clickNext}>Next</button></h3>
      </div>
    )
  }
}

export default SignInModal;*/


