import { fromJS } from 'immutable';
import { selectHistoryDomain } from '../selectors';
import { initialState } from '../reducer';

describe('selectHistoryDomain', () => {
  it('should select History state', () => {
    const globalSt = fromJS({});
    const historySt = fromJS({
      global: globalSt,
      history: {
        records: ['1', '2', '3'],
      },
    });
    expect(selectHistoryDomain(historySt)).toEqual(initialState);
  });
});
