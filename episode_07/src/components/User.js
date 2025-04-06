const User = (props) => {
  const {name} = props; 
  return(
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : location-1</h3>
      <h4>Contact : contact-1</h4>
    </div>
  )
}

export default User;