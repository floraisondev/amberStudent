import React from 'react';
import "./card.css";

let userRef;

const Card = props => (
    
    <div className='card-container' onClick = {() =>{console.log(props)}} >    
        <p>{props.user.gender}</p>
          <p>{props.user.nat}</p>
         <p userRef>{props.user.email}</p> 
          <p>{props.user.name.title}</p>
         <p>{props.user.name.first}</p>
         <p>{props.user.name.last}</p> 
        
    </div>
);

export default Card;