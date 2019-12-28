import {createStore, combineReducers} from 'redux'

const ratingFilterReducer = (state = 0, action) => {
    if(action.type === 'SET_RATING_FILTER') {
        return action.rating
    }
    return state
}

const titleFilterReducer = (state = '', action) => {
    if(action.type === 'SET_TITLE_FILTER') {
        return action.title
    }
    return state
}

const moviesReducer = (state = [], action) => {
    if(action.type === 'ADD_MOVIE') {
        return state.concat(action.movie)
    }
    if(action.type === 'EDIT_MOVIE') {
        return state.map(m => {
            if(m.id === action.id) {
                return action.movie
            }
            return m
        })
    }
    if(action.type === 'DELETE_MOVIE') {
        return state.filter(m => {
            if(m.id === action.id) {
                return false
            }
            return true
        })
    }
    return state
}

const store = createStore(combineReducers({
    movies: moviesReducer,
    minRatingFilter: ratingFilterReducer,
    titleFilter: titleFilterReducer
}))
/* test */



const fast =  {
        id:'fast',
        title: "Fast Furious",
        year: "2013",
        link: " http://bit.do/fk8TU",
        rating: 3
      }

      const ater = {
            id:'ater',
            title: "Artemis Fowl",
            year: "2016",
            link: " http://bit.do/fmfAY",
            rating: 5
          }


      store.dispatch({
        type: 'ADD_MOVIE',
        movie: fast

      })    
      store.dispatch({
        type: 'ADD_MOVIE',
        movie: ater

      }) 


export default store