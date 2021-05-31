import './App.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import Home from './pages/HomePage';
import SingIn from './pages/SingInPage';
import ThankYou from './pages/ThankYouPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/my-app" component={Home} />
        <Route path="/singin" component={SingIn} />
        <Route path="/thankyou" component={ThankYou} />
      </Switch>
    </Router>
  );
}

export default App;
