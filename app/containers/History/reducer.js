/*
 *
 * History reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_RECORDS } from './constants';

export const initialState = fromJS({
  records: ['1', '2', '3'],
});

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECORDS:
      return state.set('records', action.payload);
    default:
      return state;
  }
};

export default historyReducer;
