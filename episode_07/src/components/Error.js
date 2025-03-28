import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError()
  console.log(err)
  return(
    <>
      <h3>Custom Error Page</h3>
      <p>{err.status} : {err.statusText}</p>
    </>
  )
};

export default Error;
