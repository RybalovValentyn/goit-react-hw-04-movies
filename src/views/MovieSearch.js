import s from './views.module.css'
import { useState, useEffect, lazy, Suspense} from 'react';
import PageHeader from '../components/pageHeader/PageHeader';
import * as fetcMovies from '../servises/MovieAPI';

const RenderPage = lazy(() => import('./RenderPage'));

export default function MovieSearch() {

    const [searchMovie, setsearchMovie] = useState('');
    const [searchQuery, setsearchQuery] = useState('');
    const [movie, setmovie] = useState('');

    const handleChange = event => {
        setsearchMovie(event.target.value)
    };
    
    
    const handleSubmit = event => {
        event.preventDefault();
        
        setsearchQuery(searchMovie)
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

    return(
<>
        <PageHeader text='MovieSearch' />

        <form  onSubmit={handleSubmit} >

            <label className={s.labelInpt} >
            <input className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={searchMovie}
            onChange={handleChange}
            /></label>


            <button className={s.submitBtn} type='submit' >Search</button>
            </form>
            <Suspense fallback={<h1>Waiting...</h1>} >
            <RenderPage movies={movie} />
            </Suspense>
            </>
    )
}