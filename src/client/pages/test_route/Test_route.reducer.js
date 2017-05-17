import { INC_COUNTER } from '../../constants';
const initialState = {
  counter: 0,
};
export default function expCount(state = initialState, action) {
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

