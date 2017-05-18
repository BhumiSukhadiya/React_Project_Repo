import React, {Component} from "react";
import {Tabs, Tab} from "react-bootstrap-tabs";
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import {getPanelData} from "./TabComponentActions";
import {bindActionCreators} from "redux";
import _ from "lodash";
import Panel from "./../../components/Panel";
// Import Style
import s from "./TabComponent.css";

class TabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panData0: props.panelData[0] || [],
      panData1: props.panelData[0] || [],
      panData2: props.panelData[1] || [],
      panData3: props.panelData[2] || [],
      panData4: props.panelData[3] || [],
    }
  }

  /*componentWillMount() {
    this.props.getPanelData(0).then((resp) => {
      if (resp) {
        this.setState({panData0: this.props.panelData[0]})
      }
    });
  }*/

  /*shouldComponentUpdate(nextProps,nextState){
   if(!_.isEqual(nextProps,this.props)|| !_.isEqual(nextState,this.state)){
   return true;
   }
   return false;

   }*/
  onTabSelect = (index) => {
    switch (index) {
      case 0:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {
          this.props.getPanelData(index).then((resp) => {
            if (resp) {
              this.setState({panData0: this.props.panelData[0]});
            }
          });
        }
        break;

      case 1:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {
          this.props.getPanelData(index).then((resp) => {
            if (resp) {
              this.setState({panData1: this.props.panelData[1]});
            }
          });
        }
        break;

      case 2:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {
          this.props.getPanelData(2).then((resp) => {
            if (resp) {
              this.setState({panData2: this.props.panelData[2]});
            }
          });
        }
        break;

      case 3:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {
          this.props.getPanelData(3).then((resp) => {
            if (resp) {
              this.setState({panData3: this.props.panelData[3]});
            }
          });
        }
        break;

      case 4:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {
          this.props.getPanelData(4).then((resp) => {
            if (resp) {
              this.setState({panData4: this.props.panelData[4]});
            }
          });
        }
        break;
      default:
        break;
    }
  };

  render() {
    //console.log(!_.isEmpty(this.state.panData))
    return (
      <div className="root">
        <div className="container">
          <Tabs onSelect={this.onTabSelect}>
            <Tab label="Tab1">
              <div className="row">
                {/*{!_.isEmpty(this.state.panData0) && this.state.panData0.map((panData, index) => (*/}
                  {/*<div className="col-md-6" key={`panData_${index}`}>*/}
                    {/*<Panel title={panData.title} content={panData.content}/>*/}
                  {/*</div>))}*/}
                  hello
              </div>
            </Tab>
            <Tab label="Tab2">
              <div className="row">
                {!_.isEmpty(this.state.panData1) && this.state.panData1.map((panData, index) => (
                  <div className="col-md-6" key={`panData_${index}`}>
                    <Panel title={panData.title} content={panData.content}/>
                  </div>))}
              </div>
            </Tab>
            <Tab label="Tab3">
              <div className="row">
                {!_.isEmpty(this.state.panData2) && this.state.panData2.map((panData, index) => (
                  <div className="col-md-4" key={`panData_${index}`}>
                    <Panel title={panData.title} content={panData.content}/>
                  </div>))}
              </div>
            </Tab>
            <Tab label="Tab4">
              <div className="row">
                {!_.isEmpty(this.state.panData3) && this.state.panData3.map((panData, index) => (
                  <div className="col-md-6" key={`panData_${index}`}>
                    <Panel title={panData.title} content={panData.content}/>
                  </div>))}
              </div>
            </Tab>
            <Tab label="Tab5">
              <div className="row">
                {!_.isEmpty(this.state.panData4) && this.state.panData4.map((panData, index) => (
                  <div className="col-md-4" key={`panData_${index}`}>
                    <Panel title={panData.title} content={panData.content}/>
                  </div>))}
              </div>
            </Tab>
          </Tabs></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {panelData: state.TabComponentData.panelData};
};

const mapDispatchToProps = dispatch => bindActionCreators({getPanelData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(TabComponent));

