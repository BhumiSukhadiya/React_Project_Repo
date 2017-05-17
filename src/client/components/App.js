import React, { Children } from 'react';
import PropTypes from 'prop-types';

const ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func,
    // Integrate Redux
    // http://redux.js.org/docs/basics/UsageWithReact.html
  store: PropTypes.shape({
    subscribe: PropTypes.func,
    dispatch: PropTypes.func,
    getState: PropTypes.func,
  }),
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends React.Component {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  getChildContext() {
    return this.props.context;
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 500);
  }

  render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
    if (this.state.loading) {
      return (<div className="loader">
        <div className="inner one" />
        <div className="inner two" />
        <div className="inner three" />
      </div>);
    }
    return Children.only(this.props.children);
  }
}

export default App;
