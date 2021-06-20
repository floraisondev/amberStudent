import React from "react"
import { withStyles } from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography } from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {FaAlignJustify }from "react-icons/fa"

//style
const styles = ({
Navbar : {
    background: "#f1f3f6",
    boxShadow: 
    `inset 0 0 15px rgba(55, 84, 170,0),
    inset 0 0 20px rgba(255, 255, 255,0),
    7px 7px 15px rgba(55, 84, 170,.15),
    -7px -7px 20px rgba(255, 255, 255,1),
    inset 0px 0px 4px rgba(255, 255, 255,.2)`,
},
Navlink : {
    color : "#000",
    fontSize : "1rem",
    margin : "0 20px",
    cursor : "pointer",
    marginBottom : "2px",
    textDecoration : "none",
    "@media(max-width: 768px)" : {
      display : "none"
},
},
Menu : {
  "@media(min-width : 768px)" : {
    display : "none"
  }
}
})

const ITEM_HEIGHT = 48;
function Navbar(props){
  const { classes } = props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    
    return(
      // Navbar
        <AppBar position="static" className ={classes.Navbar}>
        <Toolbar style = {{justifyContent : "flex-end"}} className = { classes.Toolbar}>
          <Typography style={{ boxShadow: "0px 2px #E16259"}} className={classes.Navlink}>
            Product
          </Typography>
          <Typography href="#" className={classes.Navlink}>
            Download
          </Typography>
          <Typography className={classes.Navlink}>
            Pricing
          </Typography>
        {/* sidebar Menu for smaller screens */}
          <IconButton
          className = {classes.Menu}
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          >
        <FaAlignJustify  style = {{ color : "#E16259"}}/>
       </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          className = {classes.Menu}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
         <MenuItem selected onClick={handleClose}>
            Product
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Download
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Pricing
          </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
}

export default withStyles(styles)(Navbar);