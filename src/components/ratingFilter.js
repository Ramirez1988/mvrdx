import React from 'react'
import Rating from './rating'
import {connect} from 'react-redux'

function RatingFilter({onChangeRating =()=>{}, count=0}) {
    return (
        <div className='searchRating'>
            <p> <strong>Min Rating</strong></p>
            <Rating             
            count={count} 
            onChangeRate={(newRating)=>onChangeRating(newRating)}
            />
            
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        count:state.minRatingFilter
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onChangeRating:(newRating)=>{
            dispatch({
                type:'SET_RATING_FILTER',
                rating:newRating
            })            
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(RatingFilter);