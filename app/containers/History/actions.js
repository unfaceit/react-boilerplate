/*
 * History actions
 */

import { LOAD_RECORDS } from './constants';

export const fetchAll = payload => ({
  type: LOAD_RECORDS,
  payload,
});
