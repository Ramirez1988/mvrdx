import React from 'react'
import {connect} from 'react-redux'

function TitleFilter({value, onChangeName}) {
    
    return (
        
        <div className='searchArea'>
            <input 
            className='searchBar'
            placeholder='Search'
            value={value} 
            type='text' 
            onChange={(event)=>onChangeName(event.target.value)}
            />
            <input className='btn' type='button' value='Movies'/>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        value:state.titleFilter
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onChangeName:(newTitleFilter)=>{
            dispatch({
                type: 'SET_TITLE_FILTER',
                title: newTitleFilter
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TitleFilter);