
import React, { Component } from 'react'
import Score from './Score'
export default class Student extends Component {

    render() {
        const scoresComponents = this.props.scores.map((scores, idx) => {
         return (
             
                
                <Score
                content={scores}
                key={`score-${idx}`}
                />

             

         )  
        
        })
         
    return(
        <div>
            <h2>{this.props.name}</h2>
            {scoresComponents}
        </div>
    )
}
}
