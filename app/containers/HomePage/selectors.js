import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('homePage', initialState);

const makeSelectUserInput = () =>
  createSelector(selectHome, homeState => homeState.get('userInput'));

export { selectHome, makeSelectUserInput };
