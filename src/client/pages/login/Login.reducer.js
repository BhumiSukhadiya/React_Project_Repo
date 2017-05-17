import { SET_TOKEN } from '../../constants';

export default function expCount(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}

