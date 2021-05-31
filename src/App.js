import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SingIn from './pages/SingInPage';
import ThankYou from './pages/ThankYouPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/singin" component={SingIn} />
        <Route exact path="/thankyou" component={ThankYou} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
