import React from 'react';
import { Switch, Route } from 'react-router-dom';
import map from 'lodash/map';
import routes from './routes';

const AppRoot = () => {
  return (
    <Switch>
      {map(routes, route => <Route key={route.path} {...route} />)}
    </Switch>
  )
};

export default AppRoot;