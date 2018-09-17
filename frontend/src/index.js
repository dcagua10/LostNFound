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

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Login />, document.getElementById('login'));
ReactDOM.render(<LostObjects />, document.getElementById('lostobjects'));
ReactDOM.render(<LostForm />, document.getElementById('lostForm'));
ReactDOM.render(<FoundObjects />, document.getElementById('foundobjects'));
ReactDOM.render(<FoundForm />, document.getElementById('foundForm'));

/*ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/Login" component={Login}/>
        <Route path="/LostObjects" component={LostObjects}/>
        <Route path="/AddLostObjects" component={LostForm}/>
        <Route path="/FoundObjects" component={FoundObjects}/>
        <Route path="/AddFoundObjects" component={FoundForm}/>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('root'));*/
registerServiceWorker();
