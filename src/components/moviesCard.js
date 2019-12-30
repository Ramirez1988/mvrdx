import React from 'react';
import Rating from './rating'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'

 function MoviesCard ({Movie, onDelete =()=>{}, onEdit =()=>{}}) {            
                     
        return (           
                              
       <div className='card'>
            
       <div><Rating count={Movie.rating}/></div><br/>                 
       <img className='cardImage' src ={Movie.link}/>
       <div style={{display:'flex'}}>
            <button className='btn-change' onClick={() => onDelete(Movie.id)}>Remove</button>
            <button className='btn-change' onClick={() => onEdit(Movie)}>Edit</button>
            <Link to={`/${Movie.id}`} ><button className='btn-change'>Description</button></Link>                    
       </div>                
            <h3 style={{ textAlign: 'center' }}>{Movie.title} - {Movie.year}</h3>                
       </div>      
       
       )    
}
const mapDispatchToProps = dispatch =>{
    return{
        onDelete: (id)=>{
            dispatch({
                type:'DELETE_MOVIE',
                id:id
            })

        },
        onEdit: (Movie) => {
            dispatch({
                type: 'EDIT_MOVIE',
                id: Movie.id,
                movie: {
                    id: Movie.id,
                    title: prompt('movie title: ', Movie.title),
                    rating: Number(prompt('movie rating: ', Movie.rating)),
                    link: Number(prompt('movie link: ', Movie.link)),
                    year: Number(prompt('movie year: ', Movie.year))
                }
            })
        }
    }
}
export default connect (null, mapDispatchToProps) (MoviesCard);