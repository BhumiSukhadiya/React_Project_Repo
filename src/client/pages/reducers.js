import { combineReducers } from 'redux';
import counter from './test_route/Test_route.reducer';
import authentication from './login/Login.reducer';
import TabComponentData from './tabComponent/TabComponentReducer'

export default combineReducers({
  counter,
  authentication,
  TabComponentData
});
