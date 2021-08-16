import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
// import './app/';

ReactDOM.render(<App />, document.querySelector('#root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
