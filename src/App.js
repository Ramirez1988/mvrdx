import React, { Component } from 'react';
import MoviesList from "./components/moviesList";
import RatingFilter from "./components/ratingFilter";
import TitleFilter from './components/nameFilter';
import "./App.css";

 function App () {  

    return (
      <div>
        <div className='intro'>
          <TitleFilter />            
          <RatingFilter  /> 
        </div>                  
        <MoviesList  />                
        
      </div>
    )
}
export default App;
