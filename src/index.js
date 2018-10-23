import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './AppRoot';
import configStore from './store';
import 'semantic-ui-css/semantic.css';

const ROOT = document.getElementById('root');
const history = createBrowserHistory();
const store = configStore(history);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>, ROOT )

registerServiceWorker();
