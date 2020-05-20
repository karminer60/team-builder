import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Team from './team';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Team />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
