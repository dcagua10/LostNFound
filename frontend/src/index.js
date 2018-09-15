import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';
import LostObjects from './LostObjects';
import LostForm from './LostForm';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<LostObjects />, document.getElementById('lostobjects'));
ReactDOM.render(<LostForm />, document.getElementById('lostForm'));
registerServiceWorker();
