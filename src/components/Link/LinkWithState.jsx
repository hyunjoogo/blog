import {Link, useNavigate} from "react-router-dom";

const LinkWithState = () => {
  const navigate = useNavigate();
  const pathname = "/link-test"
  const state = {test: 'test'};

  const moveToTest = () => {
    navigate(pathname, {state: state})
  }

  return (
    <>
      <h1>리액트 라우터의 API를 이용해서 state 넘기기</h1>
      <Link to={pathname} state={state}>Link 태그로 이동</Link>
      <button onClick={moveToTest}>useNavigate api로 이동</button>
    </>
  )
}

export default LinkWithState
