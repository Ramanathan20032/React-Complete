import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 1,
      userInfo: {
        name: "dummy",
        bio: "dummy Bio",
        login: "@dummy",
      },
    };

    console.log("Child Constructor");
  }

  // react allows lifeCycle methods (componentDidMount) allows to mark it as async()
  // will call only on the first render of the corresponding page
  async componentDidMount() {
    console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/ramanathan20032");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    // Each Function & Method with in the class has (this.)
    this.timer = setInterval(() => {
      console.log("Set Interval Class");
    }, 1000);
  }

  // will call when the state updates - has a seperate render cycle
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  // will call the corresponding component get replaced by other component in the UI
  // unmount stage
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will UnMount");
  }

  render() {
    console.log("Child Render");

    const { count } = this.state;
    const { name, bio, login } = this.state.userInfo;

    return (
      <div className="bg-gray-200 border-2 rounded-lg p-5">
        <h4>Count : {count}</h4>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer transition-all duration-300"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Counter
        </button>
        <h2 className="text-violet-950 text-xl">Name : {name}</h2>
        <h3>Bio : {bio}</h3>
        <h4 className="text-sm">Login : {login}</h4>
      </div>
    );
  }
}

export default UserClass;
