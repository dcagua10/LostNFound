import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';
import LostObjects from './LostObjects';
import LostForm from './LostForm';
import FoundObjects from './FoundObjects';
import FoundForm from './FoundForm';
import LandingPage from './LandingPage';
import signUp from './signUp';

/*ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<LostObjects />, document.getElementById('lostobjects'));
ReactDOM.render(<LostForm />, document.getElementById('lostForm'));
ReactDOM.render(<FoundObjects />, document.getElementById('foundobjects'));
ReactDOM.render(<FoundForm />, document.getElementById('foundForm'));
ReactDOM.render(<LandingPage />, document.getElementById('landing'));
*/
ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exac path="/signin" component={Login}/>
        <Route exac path="/lost" component={LostObjects}/>
        <Route exac path="/found" component={FoundObjects}/>
        <Route exac path="/lostForm" component={LostForm}/>
        <Route exac path="/foundForm" component={FoundForm}/>
        <Route exac path="/signup" component={signUp}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('root'));
registerServiceWorker();
