import {useEffect, useState} from "react";

const BrowserLanguage = () => {
  const [language, setLanguage] = useState();
  const [navigatorLanguage, setNavigatorLanguage] = useState();

  useEffect(() => {
    setNavigatorLanguage(navigator.language || navigator.userLanguage)
    let langStr = new Intl.Locale(navigator.language || navigator.userLanguage)
    console.log(langStr)
    setLanguage(langStr.language)
  }, [])

  return (
    <>
      <h1>현재 사용하는 브라우저 언어 : {language}</h1>

      <p>navigator.language || navigator.userLanguage 결과값 : {navigatorLanguage}</p>
      <br/>
      <p>
        사용언어와 접속지역 또는 사용언어만 나올 수 있다. <br/>
        예시 : <br/>
        ko-KR (사용언어 : 접속지역), ko (사용언어) / en-US (사용언어 : 접속지역), en (사용언어) <br/>
        으로 나올 수 있다. <br/>
        <br/>
        위의 결과값을 string으로 짤라서 사용하는 것보다 new Intl.Locale을 이용하여<br/>
        Locale 오브젝트 안에 language만 따로 받아서 사용가능하다.<br/>
        (위 오브젝트 안에 region도 있다)<br/>
      </p>

    </>
  )
}

export default BrowserLanguage
