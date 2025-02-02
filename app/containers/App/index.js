/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Settings from 'components/Settings'
import ListPage from 'containers/ListPage/Loadable'
import Chat from 'components/Chat'
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/settings" component={Settings} />
              <Route path="/lists" component={ListPage} />
              <Route path="/chat" component={Chat} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
