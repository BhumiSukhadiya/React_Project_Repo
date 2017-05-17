import React, {Component } from "react";
import PropTypes from 'prop-types';
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
      panData: props.panelData || {}
    }
  }

  componentWillMount() {
    let tempObj = this.state.panData;
    this.props.getPanelData(0).then((resp) => {
      if (resp) {
        tempObj[0] = this.props.panelData[0];
        this.setState({panData: tempObj})
      }
    });
  }

  /*shouldComponentUpdate(nextProps,nextState){
   if(!_.isEqual(nextProps,this.props)|| !_.isEqual(nextState,this.state)){
   return true;
   }
   return false;

   }*/
  onTabSelect = (index) => {
    let tempObj = this.state.panData;
    switch (index) {
      case 0:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {
          this.props.getPanelData(index).then((resp) => {
            if (resp) {
              tempObj[index] = this.props.panelData[index];
              this.setState(()=>({panData: tempObj}))
            }
          });
        }
        break;

      case 1:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {
          this.props.getPanelData(index).then((resp) => {
            if (resp) {
              tempObj[index] = this.props.panelData[index];
              this.setState(()=>({panData: tempObj}))            }
          });
        }
        break;

      case 2:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {          this.props.getPanelData(2).then((resp) => {
            if (resp) {
              tempObj[index] = this.props.panelData[index];
              this.setState(()=>({panData: tempObj}))            }
          });
        }
        break;

      case 3:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {          this.props.getPanelData(3).then((resp) => {
            if (resp) {
              tempObj[index] = this.props.panelData[index];
              this.setState(()=>({panData: tempObj}))            }
          });
        }
        break;

      case 4:
        if (_.isEmpty(this.props.panelData) || !this.props.panelData.hasOwnProperty(index)) {          this.props.getPanelData(4).then((resp) => {
            if (resp) {
              tempObj[index] = this.props.panelData[index];
              this.setState(()=>({panData: tempObj}))            }
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
              {!_.isEmpty(this.state.panData[0]) && this.state.panData[0].map((panData, index) => (
                <div className="col-md-6" key={`panData_${index}`}>
                  <Panel title={panData.title} content={panData.content}/>
                </div>))}
            </div>
          </Tab>
          <Tab label="Tab2">
            <div className="row">
              {!_.isEmpty(this.state.panData[1]) && this.state.panData[1].map((panData, index) => (
                <div className="col-md-6" key={`panData_${index}`}>
                  <Panel title={panData.title} content={panData.content}/>
                </div>))}
            </div>
          </Tab>
          <Tab label="Tab3">
            <div className="row">
              {!_.isEmpty(this.state.panData[2]) && this.state.panData[2].map((panData, index) => (
                <div className="col-md-6" key={`panData_${index}`}>
                  <Panel title={panData.title} content={panData.content}/>
                </div>))}
            </div>
          </Tab>
          <Tab label="Tab4">
            <div className="row">
              {!_.isEmpty(this.state.panData[3]) && this.state.panData[3].map((panData, index) => (
                <div className="col-md-6" key={`panData_${index}`}>
                  <Panel title={panData.title} content={panData.content}/>
                </div>))}
            </div>
          </Tab>
          <Tab label="Tab5">
            <div className="row">
              {!_.isEmpty(this.state.panData[4]) && this.state.panData[4].map((panData, index) => (
                <div className="col-md-6" key={`panData_${index}`}>
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

