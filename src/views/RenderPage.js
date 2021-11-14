import { Link} from 'react-router-dom';

import s from './views.module.css'

export default function RenderPage({movies}) {

    return(
        <>
           {movies && (
          <ul className={s.container}>
            {movies.map(movie => (
              <li key={movie.id} className={s.mlviesItem}>
                  <p>{movie.title}</p>
                  
                  <Link to={`/movies/${movie.id}`}>
                <img className={s.mlviesImage} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
}