import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Panel} from 'react-bootstrap';

// Import Style
import styles from './Panel.css';

const DataPanel=(props)=>{

  return (<div>
    <Panel header={props.title}>
      <div>{props.content}
      </div>
    </Panel>
  </div>);
}

export default DataPanel;
