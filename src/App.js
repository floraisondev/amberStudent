import React, { Component } from 'react';
import './App.css';
import  Testimonial from "./components/testimonial"
import axios from "axios"
class App extends Component {
  constructor(){
    super();
//creating state variables to store the users fetched
    this.state = {
      users : [],
    };
  }

//fetching data
  componentDidMount(){
  axios.get('https://testimonialapi.toolcarton.com/api')
  .then((response) => {
    // handle success
    this.setState({users : response.data })
  })
  .catch((error) => {
    // handle error
    console.error(error);
  })
}
render() {
    const { users, defaultUser} = this.state;
    return (
      <div className="App">
         <Testimonial users = {users} />     
      </div>
    );
  }
}

export default App;;