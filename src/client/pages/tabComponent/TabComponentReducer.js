// Import Actions
import {STORE_PANEL_DATA  } from './TabComponentActions';
import _ from 'lodash';

// Initial State
const initialState = {
  panelData:{}
};

const TabComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PANEL_DATA:
      let temp={}
      if(!_.isEmpty(state.panelData)){
        temp=state.panelData;
      }
      temp[action.tab_no]=action.panelData
      //console.log(temp)
      return {...state,
        panelData:temp}
    default:
      return state;
  }
};

export default TabComponentReducer;
