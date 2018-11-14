import { fetchAll } from '../actions';
import { LOAD_RECORDS } from '../constants';

describe('History actions', () => {
  describe('Function fetchAll', () => {
    it('should return type LOAD_RECORDS', () => {
      const expected = {
        type: LOAD_RECORDS,
      };
      expect(fetchAll()).toEqual(expected);
    });
  });
  describe('Records retrieved', () => {
    it('should return an array', () => {
      expect(Array.isArray(fetchAll()).toBe(true));
    });
  });
});
