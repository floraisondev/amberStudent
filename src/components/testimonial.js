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

    slideContainer : {
        background : "#fff",
        width : "95%",
        height : "80vh",
        top:"20%",
        borderTopRightRadius : "100px",
        position : "absolute",
        padding : "2rem",
        "@media(min-width : 800px)": {
            padding : "4rem",
            paddingLeft : "6.5em",
            top : "20%",
            right : 0,
            width : "95%",
            borderRadius : "320px",
            height : "70vh",
            borderTopRightRadius : 0,
            borderBottomRightRadius : 0,
        }     
    },

    sliderContent : {
        "@media(min-width : 800px)": {
        width : "90%", 
        transiton : "0.45s",   
        margin: "20px 0 0 45px" 
        }
    },

    Arrow : {
        fontSize : "4vw",
        background: "#F0F8FF",
        borderRadius: 50,
        padding : 10,
        zIndex : 10,
        cursor : "pointer",
        userSelect : "none",
        margin : 7,   
        "@media(max-width : 800px)" : {
            fontSize : "2.5rem"
        } 
    },
    leftArrowMargin : {
        marginLeft : "15%",
        "@media(max-width : 1120px)":{
          marginLeft : "40%"
        },
        "@media(max-width : 800px)":{
            marginLeft : "30%"
          }
    },
    slide : {  
   "@media(min-width : 800px)": {
      left : "500px"
     },   
     opacity : 0,
     transitionDuration : "0.5s ease",
     position : "relative", 
     right : "500px" 
    },

     active : {
    "@media(min-width : 800px)": {
      left : "0px"
     },   
      opacity : 1,
      transitionDuration : "0.5s",
      right : "0px"
             
  },
     
    indicator : {
        "@media(min-width : 800px)": {
       marginTop : "2.5rem",
       marginLeft : "40px",   
        },
        marginTop : "3rem"
    },
   
    imgBtn : {
     display : "inline-block",
     margin : "5px",
     cursor : "pointer",
    },
    activeImageBtn : {
        border : "4px solid #602FF7"
    },
    dispFlex : {
        "@media(min-width : 800px)": {
            display :"flex", justifyContent: "space-between"
        }
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

if(!Array.isArray(props.users) || length <= 0){
    return null
}
   return(
          <> 
         <Grid  className = {classes.slider}>         
             <Grid className = {classes.slideContainer}>
             <h3 className= { classes.sliderContent}>TESTIMONIALS</h3>
                 {props.users.map((user,index) => (
                <Grid className = {index === current ? [classes.slide,classes.active].join(" ") : classes.slide} key = {index} >
                   {index === current && (<Grid className={classes.sliderContent}>
                    
                    <h2>{user.message}</h2>   
                     <p>{user.lorem}</p> 
                    <div className={classes.dispFlex}>
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
             <IoArrowBackOutline className = {[classes.Arrow, classes.leftArrowMargin].join(" ")} onClick = {prevSlide} />
             <IoArrowForwardOutline className = {classes.Arrow} onClick = {nextSlide} />  
             </Grid>  
             </Grid>
           
         </Grid>   
          </>
     )
}
export default withStyles(styles)(Testimonial);