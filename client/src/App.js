import './App.css';
import Main from './Layouts/Main';
import MainStart from './Layouts/MainStart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Link to="/game"></Link>
        <Link to="/start"></Link>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/game">
            <Main />
          </Route>
          <Route exact path="/">
            <MainStart />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
