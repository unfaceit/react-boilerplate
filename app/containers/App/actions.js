import { LOAD_RECORDS } from './constants';

export const loadRecords = async () => {
  // fetch all records from database
  const records = ['I am', 'just', 'testing'];
  // assign records to the state
  try {
    return {
      type: LOAD_RECORDS,
      payload: records,
    };
  } catch (err) {
    return err;
  }
};
