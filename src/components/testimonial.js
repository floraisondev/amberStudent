import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { FaArrowAltCircleLeft , FaArrowAltCircleRight} from 'react-icons/fa';


//styles
const styles = () => ({ 
    slider : {
     display : "flex",
     height : "100vh",
     alignItems:"center",
     justifyContent : "right",
     
    },
    sliderContent : {
       
        width : "100%",
        background : "#fff",
        cursor : "pointer",
        margin : "5px",
       height : "40vh",
   
       
    },
    leftArrow : {
        position : "absolute",
        top : "80%",
        left : "32px",
        fontSize : "3rem",
        color : "#000",
        zIndex : 10,
        cursor : "pointer",
        userSelect : "none"

    },
    rightArrow : {
        position : "absolute",
        top : "80%",
        right : "32px",
        fontSize : "3rem",
        color : "#000",
        zIndex : 10,
        cursor : "pointer",
        userSelect : "none"
    },
    // slide : {
    //     opacity : 0,
    //     transitionDuration : "1s ease"
    // },
    // active : {
    //     opacity : 1,
    //     transitionDuration : "1s",
    //     transform : "scale(0.8)"
    // },
    indicator : {
        position : "absolute",
        left : "50%",
        transform : "translateX(-50%)",
        top : "60%",
        zIndex:20,
        width : "100%"
    },
    imgBtn : {
     display : "inline-block",
     height : "25px",
     width : "25px",
     margin : "5px",
     cursor : "pointer",
    },
    activeImageBtn : {
        border : "4px solid blue"
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
             <FaArrowAltCircleLeft className = {classes.leftArrow} onClick = {prevSlide} />
             <FaArrowAltCircleRight className = {classes.rightArrow} onClick = {nextSlide} />
             <Grid className= {classes.indicator}>
             {props.users.map((user,index) => (
                   <img src= {user.avatar } className= {index === current ? [classes.imgBtn, classes.activeImageBtn].join(" "): classes.imgBtn} onClick = {() => changeImageSlide(index)}/>
                 ))}  
             </Grid>
                 {props.users.map((user,index) => (
                <Grid className = {index === current ? [classes.slide,classes.active].join(" ") : classes.slide} key = {index} >
                   {index === current && (<Grid className={classes.sliderContent}>
                     <h1>TESTIMONIALS</h1>
                    <h2>{user.message}</h2>   
                     <p>{user.lorem}</p> 
                    <p>{user.name}{" "}{user.designation}</p>   
                  
                 </Grid> )}
               </Grid>
             ))}  
         </Grid>   
          </>
     )
}
export default withStyles(styles)(Testimonial);