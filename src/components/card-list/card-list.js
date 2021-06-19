import React, { useState } from 'react';
import './card-list.css';
import MainCard from "../main-card/main-card"
function CardList (props){
const [currentUser, setUser] = useState(props.defaultUser)

const getCurrentUser = (user) => {
      setUser(user)
    }
     return(
          <>
          <MainCard 
           picture = {currentUser ? currentUser.picture.medium : props.defaultUser && props.defaultUser.picture.medium }
           title =  {currentUser ? currentUser.name.title : props.defaultUser && props.defaultUser.name.title}
           first =  {currentUser ? currentUser.name.first : props.defaultUser && props.defaultUser.name.first}
           last =  {currentUser ? currentUser.name.last : props.defaultUser && props.defaultUser.name.last}
           number = {currentUser ? currentUser.location.street.number : props.defaultUser && props.defaultUser.location.street.number}
           streetname = {currentUser ? currentUser.location.street.name : props.defaultUser && props.defaultUser.location.street.name}
           state ={currentUser ? currentUser.location.state : props.defaultUser && props.defaultUser.location.state}
           country ={currentUser ? currentUser.location.country : props.defaultUser && props.defaultUser.location.country}
           postcode = {currentUser ? currentUser.location.postcode : props.defaultUser && props.defaultUser.location.postcode}
           offset ={currentUser ? currentUser.location.timezone.offset : props.defaultUser && props.defaultUser.location.timezone.offset}
           description = {currentUser ? currentUser.location.timezone.description : props.defaultUser && props.defaultUser.location.timezone.description}
           gender = {currentUser ? currentUser.gender : props.defaultUser && props.defaultUser.gender}
          />
         <div className='card-list'>
              {props.users.map(user => (
                 <div className='card-container' onClick = {() =>{getCurrentUser(user)}} 
                 >     
                  <p><span>{user.gender}</span>{" "}{"."}{" "}{user.nat}</p>   
                  <h2>{user.name.title}{"."}{" "}{user.name.first}{" "}{user.name.last}</h2> 
                  <p>{user.email}</p>    
             </div>      
             ))}        
          </div>
          </>
     )
}
  


export default CardList;