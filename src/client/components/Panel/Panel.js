import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';
import _ from 'lodash';

// Import Style
import styles from './Panel.css';

const DataPanel=(props)=>{
//console.log(_.random(0,7));
let style=['primary','success','info','warning','danger']
  return (<div>
    <Panel header={props.title} bsStyle={style[_.random(0,4)]}>
      <div>{props.content}
      </div>
    </Panel>
  </div>);
}

export default DataPanel;
