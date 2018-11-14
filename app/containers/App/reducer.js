import { fromJS } from 'immutable';
import { LOAD_RECORDS } from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  records: [],
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECORDS:
      return state.set('records', action.payload);
    default:
      return state;
  }
};

export default appReducer;
