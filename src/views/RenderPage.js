import { Link} from 'react-router-dom';
import {useLocation} from 'react-router';
import s from './views.module.css';

export default function RenderPage({movies, query}) {
  const location = useLocation();
  return(
        <>
           {movies && (
          <ul className={s.container}>
            {movies.map(movie => (
              <li key={movie.id} className={s.mlviesItem}>
                  <p>{movie.title}</p>
                  
                  {/* <Link to={`/movies/${movie.id}`}> */}
                  <Link to={{
                    pathname: `/movies/${movie.id}`,//откуда
                    state: {  
                      from: { location  , label: 'go to movies' , search: query }                    //куда перешли

                    }
                  }}>
                <img className={s.mlviesImage} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
}