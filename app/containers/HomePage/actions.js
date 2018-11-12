import { CHANGE_USER_INPUT } from './constants';

export const changeInput = payload => ({
  type: CHANGE_USER_INPUT,
  payload,
});
