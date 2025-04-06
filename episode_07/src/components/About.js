import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return(
    <>
      <h1>About Us</h1>
      <p>About Page Content</p>
      <User name={"Functional Component"}/>
      <UserClass name={"Class Component"}/>
    </>
  )
}

export default About;