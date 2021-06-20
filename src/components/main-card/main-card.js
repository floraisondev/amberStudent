import React from "react"
import { Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";

//styles
const styles = () => ({ 
currentUser : {
    width : "90%",
    margin: "5% auto",
    background: "#f1f3f6",
    boxShadow :  `inset 0 0 15px rgba(55, 84, 170,0),
    inset 0 0 20px rgba(255, 255, 255,0),
    7px 7px 15px rgba(55, 84, 170,.15),
    -7px -7px 20px rgba(255, 255, 255,1),
    inset 0px 0px 4px rgba(255, 255, 255,.2)`,
    padding : "20px",
    borderRadius : "4px",
    "@media(min-width: 800px)" : {
        width: "60%",
        display : "grid",
        gridTemplateColumns : "3fr 10fr",
    }
},
infoContainer:{
    "@media(min-width: 800px)" : {
    display : "grid",
    justifyItems : "left"
  }
 },
})
function Card(props){
const { classes } = props;
//rendering current user card
return(
<Grid className={classes.currentUser}>
    <Grid>
    <img src= {props.picture }/>
    </Grid>
    <Grid className = {classes.infoContainer}>
    <h1>{props.title}{" "}{props.first}{" "}{props.last}{" "}</h1>     
    <h5><span style={{color : "#A259FF"}}>{props.number}{", "}</span>{props.streetname}{", "}{props.state}{", "}<b>{props.country}{", "}</b>{props.postcode}</h5>
    <h5>{props.offset}{"-"} {props.description}</h5>
    <p>{props.gender} </p>
    </Grid>
</Grid>
)}
    
export default withStyles(styles)(Card);