import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MainCard from "../main-card/main-card"

//styles
const styles = () => ({ 
     cardList : {
          width: "95vw",
          margin: "0 auto",
          display : "grid",
          padding : "20px",
          gridGap : "10px",
          "@media(min-width: 768px)":{
             gridTemplateColumns : "repeat(2,1fr)"
          },
          "@media(min-width: 960px)":{
               gridTemplateColumns : "repeat(3,1fr)"
            },
            "@media(min-width: 1200px)":{
               gridTemplateColumns : "repeat(4,1fr)"
            } 
      },
      cardContainer : {
          display: "flex",
          flexDirection: "column",
          alignItems : "flex-start",
          boxShadow: 
          `inset 0 0 15px rgba(55, 84, 170,0),
          inset 0 0 20px rgba(255, 255, 255,0),
          7px 7px 15px rgba(55, 84, 170,.15),
          -7px -7px 20px rgba(255, 255, 255,1),
          inset 0px 0px 4px rgba(255, 255, 255,.2)`,
          borderRadius: "5px",
          padding: "25px",
          cursor : "pointer",
          margin : "5px",
          transition: "transform 0.25s ease-out",
          "&:hover" : {
               transform: "scale(1.05)"
          }
      },  

      inactiveCard : {
          background: "#f1f3f6",
      },
      activeCard : {
          background: "#E6E6FA"
      }
})
function CardList (props){
const { classes } = props;   

//to store the current user 
const [currentUser, setUser] = useState(props.defaultUser)

//function triggered onclick to update current user
const getCurrentUser = (user) => {
      setUser(user) 
}

//toggling active card styles
const toggleActiveStyles = (user) => {
let current = currentUser ? currentUser : null
if(user == current){
     return [classes.cardContainer,classes.activeCard].join(" ")
 }
else{
    return  [classes.cardContainer,classes.inactiveCard].join(" ")  
 }
}

     return(
          <>
          {/*passing current user props to MainCard with necessary checks*/}
          <MainCard 
           picture = {currentUser ? currentUser.picture.large : props.defaultUser && props.defaultUser.picture.large }
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
         <Grid  spacing={2} className={classes.cardList}>
              {/*Mapping over users array for rendering users card list */}
              {props.users.map((user,index) => (
                 <Grid item 
                 key = {index}
                 className={toggleActiveStyles(user)}
                 onClick = {() =>{getCurrentUser(user)}}>
                   <p>{user.gender}{" "}{"."}{" "}<span>{user.nat}</span></p>   
                  <h2>{user.name.title}{"."}{" "}{user.name.first}{" "}{user.name.last}</h2> 
                  <h4>{user.email}</h4>   
                 </Grid>    
             ))}        
          </Grid>
          </>
     )
}
export default withStyles(styles)(CardList);