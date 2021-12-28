import {useLocation} from "react-router-dom";

const LinkWithStateTest = () => {
  const location  = useLocation();

  console.log(location)
  return (
    <h1>
      {location.state.test}
    </h1>
  )
}
export default LinkWithStateTest
