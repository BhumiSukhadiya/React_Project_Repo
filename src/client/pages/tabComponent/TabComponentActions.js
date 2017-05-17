import {commonApi} from './../../commonApi/commonApi';
// Export Constants
export const STORE_PANEL_DATA='STORE_PANEL_DATA';
// Export Actions

export function storePanelData(tab_no,panelData){
  //console.log(panelData)
  return {
    type:STORE_PANEL_DATA,
    panelData,
    tab_no
  }
}

export function getPanelData(tab_no){
  return (dispatch)=>{
    return commonApi({url:'http://localhost:3000/getPanelData/?tab='+tab_no})
    .then(data=>{
      dispatch(storePanelData(tab_no,data));
      return true;
    });
  }
}
