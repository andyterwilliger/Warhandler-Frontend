//Import CSS 
import './css/App.css';
import './css/Nav.css';

//Import components
import Nav from './components/Nav';
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom';

//Import Pages

import Index from './pages/Index';

function App() {
  const URL = 'http://localhost:4000/'
  //const URL = 'https://warhandlerbackend.herokuapp.com/';
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path = '/'>
          <Index URL={URL} />
        </Route>


      </Switch>

    </div>
  );
}

export default App;
