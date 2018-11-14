import { fromJS } from 'immutable';
import historyReducer from '../reducer';

describe('historyReducer', () => {
  it('should return the initial state', () => {
    expect(historyReducer(undefined, {})).toEqual(
      fromJS({ records: ['1', '2', '3'] }),
    );
  });
});
