import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import Index from './pages/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
 <Index />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
