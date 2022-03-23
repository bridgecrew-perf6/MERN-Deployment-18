
import './App.css';
import { BrowserRouter as Router,  Route,Switch,} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import ViewOne from './views/ViewOne';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/pirates'}>
            <Main/>
          </Route>
          <Route exact path={'/pirate/new'}>
            <Create/>
          </Route>

          <Route exact path={'/pirate/:id'}>
            <ViewOne/>
          </Route>


        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
