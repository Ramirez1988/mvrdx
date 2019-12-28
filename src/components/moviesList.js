import React from 'react'
import MoviesCard from './moviesCard';
import {connect} from 'react-redux'


 function MoviesList({films, onAddMovie }) {
    
    return (
    
    <div style={{display:'flex',flexWrap:'wrap'}}>
    {films.map((el,i) =>
    <MoviesCard
    key={i}
    Movie={el}    
    />
    )}
    <div className='card'>
    <h2 onClick={onAddMovie}>+</h2>    
    </div>   
    </div>
                
     )}

     const mapDispatchToProps = dispatch =>{
         return{
             onAddMovie:()=>{
                 dispatch({
                     type:'ADD_MOVIE',
                     movie: {
                        id: Math.random(),
                        title: prompt('movie title: '),
                        year: Number(prompt('movie year: ')),
                        rating: Number(prompt('movie rating: ')),
                        link: prompt('movie link: '),
                     }
                 })
             }
         }

     }
     const mapStateToProps = state =>{
        return{
            films:state.movies.filter(el=>el.rating>=state.minRatingFilter &&
                el.title.toLowerCase().includes(state.titleFilter.toLowerCase().trim()))
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps) (MoviesList);