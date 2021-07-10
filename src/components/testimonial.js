import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5"

//styles
const styles = () => ({ 
    slider : { 
     height : "100vh",
     position : "relative"
    },
    sliderContent : {
        width : "100%", 
        transiton : "0.45s",    
    },

    Arrow : {
        fontSize : "4rem",
        background: "#cacef5",
        borderRadius: 50,
        padding : 10,
        zIndex : 10,
        cursor : "pointer",
        userSelect : "none",
        margin : 7
    },
//     slide : {        
//         transiton : "0.45s",
//     },
//      active : {
//       transiton : "0.45s",     
//       animation: "slide 0.5s forwards",
//       animationDelay: "2s",
      
//   },
        
     
    indicator : {
       marginTop : "2.5rem"
    },
    slideContainer : {
     background : "#fff",
     padding : "4rem",
     paddingLeft : "6.5em",
     position : "absolute",
     top : "20%",
     right : 0,
     width : "90%",
     borderRadius : "320px",
     height : "70vh",
     borderTopRightRadius : 0,
     borderBottomRightRadius : 0
    },
    imgBtn : {
     display : "inline-block",
     margin : "5px",
     cursor : "pointer",
    },
    activeImageBtn : {
        border : "4px solid #602FF7"
    }
})
function Testimonial (props){
const { classes } = props;   
const [current, setCurrent] = useState(0)
const length = props.users.length
const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}
const changeImageSlide = (id) => {
    setCurrent(id)
}
console.log(current)
if(!Array.isArray(props.users) || length <=0){
    return null
}
   return(
          <> 
         <Grid  className = {classes.slider}>
            
             <Grid className = {classes.slideContainer}>
            
                 {props.users.map((user,index) => (
                <Grid className = {index === current ? [classes.slide,classes.active].join(" ") : classes.slide} key = {index} >
                   {index === current && (<Grid className={classes.sliderContent}>
                     <h3>TESTIMONIALS</h3>
                    <h2>{user.message}</h2>   
                     <p>{user.lorem}</p> 
                    <div style ={{ display :"flex", justifyContent: "space-between"}}>
                    <p><span>{user.name}</span>{", "}{user.designation}{", "}{user.location}</p> 
                   <p style = {{ color : "#4120A9", cursor : "pointer"}}>READ FULL STORY</p>     
                    </div>
                      
                 </Grid> )}
               </Grid>
             ))}
              <Grid className= {classes.indicator}>
             {props.users.map((user,index) => (
                   <img src= {user.avatar } className= {index === current ? [classes.imgBtn, classes.activeImageBtn].join(" "): classes.imgBtn} onClick = {() => changeImageSlide(index)}/>
                 ))}
             <IoArrowBackOutline style = {{ marginLeft : "10%"}}className = {classes.Arrow} onClick = {prevSlide} />
             <IoArrowForwardOutline className = {classes.Arrow} onClick = {nextSlide} />  
             </Grid>  
             </Grid>
           
         </Grid>   
          </>
     )
}
export default withStyles(styles)(Testimonial);