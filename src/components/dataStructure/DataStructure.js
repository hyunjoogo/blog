import {dataSample} from "./sample";
import {useState} from "react";
import {isEmpty} from "lodash";

const DataStructure = () => {
  const [region, setRegion] = useState('seoul');
  const [isRegionListOpen, setIsRegionListOpen] = useState(false);
  const [isAllListOpen, setIsAllListOpen] = useState(false);

  const forInKey = () => {
    let list = []
    for (let key in dataSample) {
      // console.log(dataSample[key])
      list.push(...dataSample[key])
    }
    return list
  }

  const changeRegion = (event) => {
    const {target: {name}} = event;
    setRegion(name)
  }

  return (
    <>
      <h1>데이터 구조에 따른 내용 보여주기</h1>
      <ul>
        <li onClick={() => console.log(dataSample)}>
          <div>기존 자료 구조 (클릭 후 콘솔창 확인)</div>
          <div>Object 안에 서울, 부산 지역별로 Array in Object 형식으로 되어 있다.</div>
        </li>

        <li>
          <div onClick={() => setIsRegionListOpen(prev => !prev)}>
            이 구조를 이용하여 지역별로 자료를 하나씩 보여줄 수 있다. (클릭 후 콘솔창 확인) <br/>
            지역버튼을 누르면 각 자료를 볼 수 있습니다.
          </div>
          {isRegionListOpen &&
          <>
            <div>
              <button name="seoul" onClick={changeRegion}>서울</button>
              <button name="busan" onClick={changeRegion}>부산</button>
            </div>
            <div>
              {dataSample[region].map((item,index) => {
                console.log(item)
                return (
                  <p key={index}>닉네임 : {item.nickName} / 이름 : {item.name}</p>
                )
              })}
            </div>
          </>
          }
        </li>
        <li>
          <div onClick={() => {
            setIsAllListOpen(prev => !prev);
          }}>
            for in 문을 이용해서 key를 가지고 올 수 있다. (클릭 후 콘솔창 확인) <br/>
            지역버튼을 누르면 각 자료를 볼 수 있습니다.
          </div>
          {isAllListOpen &&
          <>
            <div>
              <p>1. 전체list를 for (let key in List) 로 Object의 key를 가지고 올 수 있다.</p>
              <p>
                2. seoul, busan 키값을 가지는 array를 가지고 온다.<br/>
                [{}, {}] 구조를 가지고 있다.
              </p>
              <p>3. spread 문법을 이용해서 각 Object를 임의의 list에 넣어준다.</p>
              {forInKey().map((item, index) => {
                console.log(item)
                return (
                  <p key={index}>닉네임 : {item.nickName} / 이름 : {item.name}</p>
                )
              })}
            </div>
          </>
          }
        </li>
      </ul>
    </>
  )

}


export default DataStructure
