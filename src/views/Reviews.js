import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import {Img} from 'react-image'

import * as fetcMovies from '../servises/MovieAPI';
import s from './views.module.css'

export default function ReviewsViews() {
    const {movieId } = useParams();
    const [views, setviews] = useState(null);

  useEffect(() => {
    fetcMovies.fetchMuvieViews(movieId).then(view => {
        setviews(view.results);
                
      });
  }, [movieId]);


  return (
    <div>
{views &&  
   <ul >
        {views.map(view  => (
          <li key={view.id}>
           <h3>{view.author}</h3>
     {view.author_details.avatar_path &&
            <Img className={s.castImage}
                 src={[`https://image.tmdb.org/t/p/w500${view.author_details.avatar_path}`, (view.author_details.avatar_path).slice(1,(view.author_details.avatar_path).length)]}                  
             />
        }
        <p className={s.contentItem}>{view.content}</p>

          </li>
        ))}
    </ul>}
    </div>
  );
}

      
