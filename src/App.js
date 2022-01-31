//Import CSS 
import './css/App.css';
import './css/Nav.css';

//Import components
import Nav from './components/Nav';
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom';

//Import Pages

function App() {
  return (
    <div className="App">
      <Nav />

    </div>
  );
}

export default App;
