import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(props){
    super(props)
    // console.log("Parent Constructor")
  }

  componentDidMount(){
    // console.log("Parent Component Did Mount")
  }

  render(){
    // console.log("parent Render")
    return(
      <>
        <h1>About Us</h1>
        <p>About Page Content</p>
        <UserClass name={"Class Component"}/>
        <User name={"Function Component"}/>
      </>
    )
  }
}


export default About;