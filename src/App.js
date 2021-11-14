
import React, { lazy, Suspense} from "react";
import { Switch, Route } from 'react-router-dom';
// import s from './app.module.css'
// import HomePage from './views/HomePage';
import Container  from './components/container/Container';
import Appbar from './components/appBar/AppBar';
import MovieSearch from './views/MovieSearch'
import MovieDetailsView from './views/MovieDetailsView'

function App() {
  const HomePage = lazy(()=>import('./views/HomePage'));
 
  return (
<Container>

<Appbar/>
<Suspense fallback='waiting' >
  
      <Switch>
        <Route exact path="/" >
        <HomePage />
        </Route>

        <Route exact path="/movies">
          <MovieSearch/>
        </Route>


        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>
{/* 
        <Route>
          <NotFoundView />
        </Route> */}
      </Switch>

      </Suspense>



</Container>




  );
}

export default App;