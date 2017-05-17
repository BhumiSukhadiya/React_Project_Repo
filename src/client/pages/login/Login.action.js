import { SET_TOKEN } from './../../constants';
import cookie from 'react-cookie';
export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function doLogin() {
  return (dispatch) => {
    const token = 'adsdgvfsfgtvcyegccbgeu';
    dispatch(setToken(token));
    localStorage.setItem('token', token);
    cookie.save('token', token);
  };
}
