import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');
const selectRouter = state => state.get('router');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectRecords = () =>
  createSelector(selectGlobal, globalState => globalState.get('records'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

export {
  selectGlobal,
  makeSelectRecords,
  makeSelectLocation,
  makeSelectLoading,
  makeSelectError,
};
