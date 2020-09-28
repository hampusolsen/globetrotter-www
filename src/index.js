import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <div>Hello World</div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
