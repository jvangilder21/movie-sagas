import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';


function App() {
  return (
    <div className="App">
      <header className="header">
      <h1>The Movies Saga!</h1>
      </header>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:id" exact>
          <Details />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
