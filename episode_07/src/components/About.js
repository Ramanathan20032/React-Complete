import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor")
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount")
  }

  render() {
    // console.log("parent Render")
    return (
      <div className="user-card p-5">
        <p className="text-xl text-center font-bold mb-3">About Us Page</p>
        <UserClass name={"Class Component"} />
        <User name={"Function Component"} />
      </div>
    );
  }
}

export default About;
