import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 1,
      userInfo: {
        name : "dummy",
        bio : "dummy Bio",
        login : "@dummy"
      }
    };
    
    console.log("Child Constructor")
  }

  async componentDidMount(){
    console.log("Child Component Did Mount")
    const data = await fetch("https://api.github.com/users/ramanathan20032")
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo : json
    })
  }

  render() {
    console.log("Child Render")

    const { count } = this.state;
    const {name, bio, login} = this.state.userInfo;

    return (
      <div className="user-card">
        <h4>Count : {count}</h4>
        <button onClick={() => {
          this.setState({
            count : this.state.count + 1
          })
        }}>Increase Counter</button>
        <h2>Name : {name}</h2>
        <h3>Bio : {bio}</h3>
        <h4>Login : {login}</h4>
      </div>
    );
  }
}

export default UserClass;
