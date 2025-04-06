import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 1,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h4>Count : {count}</h4>
        <button onClick={() => {
          this.setState({
            count : this.state.count + 1
          })
        }}>Increase Counter</button>
        <h2>Name : {name}</h2>
        <h3>Location : location-2</h3>
        <h4>Contact : contact-2</h4>
      </div>
    );
  }
}

export default UserClass;
