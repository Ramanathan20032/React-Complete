import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : location-2</h3>
        <h4>Contact : contact-2</h4>
      </div>
    );
  }
}

export default UserClass;
