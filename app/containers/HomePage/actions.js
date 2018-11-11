import { CHANGE_USER_INPUT } from './constants';

export const changeInput = input => ({
  type: CHANGE_USER_INPUT,
  payload: input,
});
