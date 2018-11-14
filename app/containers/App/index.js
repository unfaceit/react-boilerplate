/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import History from 'containers/History/Loadable';
import { PageWrapper } from './AppUI';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <PageWrapper>
      {/* insert a logo/ name of an app */}
      <h1>String Collector</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/history" component={History} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </PageWrapper>
  );
}
