import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SingIn from './pages/SingInPage';
import ThankYou from './pages/ThankYouPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/singin" component={SingIn} />
        <Route path="/thankyou" component={ThankYou} />
      </Switch>
    </Router>
  );
}

export default App;
