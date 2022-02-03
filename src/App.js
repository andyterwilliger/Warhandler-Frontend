//Import CSS 
import './css/App.css';
import './css/Nav.css';
import './css/Index.css';
import './css/Landing.css';

//Import components
import Nav from './components/Nav';
import Main from './components/Main';
import Datacards from './components/Datacards';
import { Route, Switch } from 'react-router-dom';
import MainCreate from './components/MainCreate';


//Import Pages
import Index from './pages/Index';
import LandingPage from './pages/LandingPage';


function App() {
  const URL = 'https://warhandlerbackend.herokuapp.com/';
  return (
    <div className="App">
      <Nav />
      <Main />
      <Switch>
      <Route exact path = '/'>
          <LandingPage />
        </Route>
      <Route path = '/Index'>
          <Index URL={URL} />
        </Route>
        <Route path="/army/:symbol" render={(props) => <Datacards URL={URL} {...props} />} />
        <MainCreate />
      </Switch>
    </div>
  );
}

export default App;
