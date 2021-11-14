import { useState, useEffect,lazy, Suspense } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import PageHeader from '../components/pageHeader/PageHeader';
import * as fetcMovies from '../servises/MovieAPI';
import s from './views.module.css'
import { Link, Route, useRouteMatch,Switch} from 'react-router-dom';

const CastViews = lazy(() => import('./Cast'));
const ReviewsViews = lazy(() => import('./Reviews'));

export default function MovieDetailsView() {
 const { url, path } = useRouteMatch();
  const {movieId } = useParams();//отслеживает динамические параметри useParams
  const [movie, setmovie] = useState(null);
  

  useEffect(() => {
    fetcMovies.fetchMuvieById(movieId).then(movie => {
        setmovie(movie);
        console.log(movie);
        // console.log(movies.results[2].poster_path)
       
      });
  }, [movieId]);
  console.log(movieId );
  return (
    <>

     {movie && <PageHeader className={s.headerDetails} text={`${movie.original_title}`} />}
     
      {movie && (
      
        <div className={s.detailContainer}>
            <div>
          <img className={s.detailImage} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
          </div>
          <div>
            <h2>{movie.original_title}</h2>
        <ul>
                  {movie.genres.map(genre=>(
        <li className={s.genreItems} key={genre.id}>{genre.name}  </li>
                        ))}
        </ul>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <p>Release date: {movie.release_date}</p>
          </div>
        </div>
      )}
         

            <div className={s.castContainer}>
                <h3>Additional Information </h3>
                <ul>
                <NavLink to={`${url}/cast`} > <li className={s.infoItem}>Cast</li></NavLink>

                <NavLink to={`/movies/${movieId}/reviews`}><li className={s.infoItem}>Reviews</li></NavLink>
                </ul>
            </div>
            <hr />
        <Suspense fallback={<h1>Waiting...</h1>}>
        <Switch>
             <Route path={`${path}/cast`}>
             {movie &&  <CastViews  />}
            </Route> 

            <Route path={`${path}/reviews`}>
           {movie && <ReviewsViews />}

            </Route> 
        </Switch>
      </Suspense>
    </>
  );
}
