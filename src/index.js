import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
