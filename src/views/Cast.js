import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import {Img} from 'react-image'

import * as fetcMovies from '../servises/MovieAPI';
import s from './views.module.css'

export default function CastViews() {
    const {movieId } = useParams();
    const [views, setviews] = useState(null);

  useEffect(() => {
    fetcMovies.fetchMuvieCastiews(movieId).then(view => {
        setviews(view.cast);
                 
      });
  }, [movieId]);


  return (
    <div>
{views &&  
   <ul >
        {views.map(view  => (
          <li key={view.id}>
           <h3>{view.original_name}</h3>
     {view.profile_path&&
            <Img className={s.castImage}
                 src={[`https://image.tmdb.org/t/p/w500${view.profile_path}`]}                  
             />
        }
        <p >{view.known_for_department}</p>

          </li>
        ))}
    </ul>}
    </div>
  );
}

      
