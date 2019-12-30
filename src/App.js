import React from "react";
import MoviesList from "./components/moviesList";
import RatingFilter from "./components/ratingFilter";
import TitleFilter from "./components/titleFilter";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import "./App.css";


function App({films}) {
  return (
    <div>
      <div className="intro">
        <TitleFilter />
        <RatingFilter />
      </div>     
      <Route exact path="/" component={MoviesList} />
      {films.map((el, i) =>
        <Route path={`/${el.id}`} render={() =>
          <div className='description'>            
            <h1>Movie title: <em>{el.title}</em></h1>
            <h1>Movie year: <em>{el.year}</em></h1>
            <h1>Movie rating: <em>{el.rating}</em></h1>            
          </div>} />)}            
                
    </div>
  );
}
const mapStateToProps = state =>{
  return{
      films:state.movies
  }
}
export default connect (mapStateToProps) (App);
