import { fromJS } from 'immutable';
import { CHANGE_USER_INPUT } from './constants';

export const initialState = fromJS({
  userInput: 'message',
});

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_INPUT:
      return state.set('userInput', action.payload);
    default:
      return state;
  }
};

export default homeReducer;
