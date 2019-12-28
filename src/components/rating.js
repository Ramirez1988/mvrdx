import React from 'react'

function Rating({count, onChangeRate = () =>{}}) {
    let stars=[];
    for(let i=0;i<5;i++){
        if(i<count){
            stars.push(<span onClick={()=>onChangeRate(i+1)} key={i}>★</span>)
        }
        else {
            stars.push(<span onClick={()=>onChangeRate(i+1)} key={i}>☆</span>)
        }

    }
    return (
        <div style={{marginLeft:'10px'}}>
            {stars}
        </div>
    )
}

export default Rating;