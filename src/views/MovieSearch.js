import s from './views.module.css'
import { useState, useEffect, lazy, Suspense} from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import * as fetcMovies from '../servises/MovieAPI';
import { useHistory, useLocation} from 'react-router';
import { Link} from 'react-router-dom';


const RenderPage = lazy(() => import('./RenderPage'));


export default function MovieSearch() {
    const history = useHistory();
    const location = useLocation();
    // console.log('location', location);

    const [searchMovie, setsearchMovie] = useState('');
    const [searchQuery, setsearchQuery] = useState('');
    const [movie, setmovie] = useState('');

//     const movieorder = new URLSearchParams(location.search).get('search-nbjhbjhbjhbjhb')  //метод изменения историии стороки поиска, получили данные со строки поиска
// console.log(movieorder);
    const handleChange = event => {
        setsearchMovie(event.target.value)
    };
    
    const handleSubmit = event => {
        event.preventDefault();        
        setsearchQuery(searchMovie)
        
        history.push({...location, search: `${searchMovie}`})
        setsearchMovie('')
       };

    useEffect(() => {
          if (searchQuery) {

           fetcMovies.fetchMuvieSearch(searchQuery).then(movie => {
            setmovie(movie.results);
     
       } )
       .catch(error => {
        console.log(error);
    });
    }

    },[searchQuery])

       
    useEffect(()=>{
            if (history.location.search) {

                fetcMovies.fetchMuvieSearch(history.location.search).then(movie => {
                 setmovie(movie.results);
          
            } )
            .catch(error => {
             console.log(error);
         });
         }
        },[location])
        

return(
<>
        <PageHeader text='MovieSearch' />

        <form  onSubmit={handleSubmit} >

            <label className={s.labelInpt} >
            <input className={s.input}
            type="text"
            name="name"
            value={searchMovie}
            onChange={handleChange}
            /></label>


            <button className={s.submitBtn} type='submit' >Search</button>
            </form>
            <Suspense fallback={<h1>Waiting...</h1>} >
            <RenderPage movies={movie} query={searchQuery}/>
            </Suspense>
            </>
    )
}