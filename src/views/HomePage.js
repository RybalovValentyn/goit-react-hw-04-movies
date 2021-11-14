import { useState, useEffect, lazy, Suspense} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as fetcMovies from '../servises/MovieAPI';
import PageHeader from '../components/pageHeader/PageHeader';
import Pagination from '../components/pagination/Pagination';

const RenderPage = lazy(() => import('./RenderPage'));

export default function HomePage() {
    const { url } = useRouteMatch();//для проверки совпадения адреса в аресной строке
    const [movies, setmovies] = useState(null);
   const[pagmov, setpagmov] = useState(null)
    useEffect(()=>{
  
      fetcMovies.fetchHomeMovies()
         .then(movies => {
        setpagmov(movies)
        setmovies(movies.results);
        console.log(movies.results);
        // console.log(movies.results[2].poster_path)
       
      })
         .catch(error => {
          console.log(error);
      });
  
    },[])

    return(
        <>
        
        <PageHeader text="Home" />
        <Suspense fallback={<h1>Waiting...</h1>}>
       <RenderPage movies={movies}/>
        </Suspense>
       {movies &&  <Pagination query={pagmov} />}
      </>
    )
}