import { useEffect } from "react";

const User = (props) => {
  const { name } = props;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Set Interval Function")
    }, 1000)

    // return() inside the useEffect() to cleanup function and will run when the component unMounts.
    return () => {
      clearInterval(timer);
      console.log("useEffect return - Component unmount");
    };
  }, []);

  console.log("Function Render");

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : location-1</h3>
      <h4>Contact : contact-1</h4>
    </div>
  );
};

export default User;
