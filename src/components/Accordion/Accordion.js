import {useState} from "react";

const currentItems = [
  {
    "id": 116,
    "title": "아차키앱에서 등록된 차량의 차 문을 닫을 수 있나요?",
    "contents": "수동제어로 아차키앱에 등록된 차량의 문을 닫을 수 있습니다. 단, 차키권한을 소유하고 있고 통신에 문제가 없는 환경(위치서비스 항시 허용, 블루투스 활성화)에서 정상적인 작동이 가능합니다.",
    "rowNum": 109,
    "totalCount": 121
  },
  {
    "id": 117,
    "title": "아차키앱에서 등록된 차량의 트렁크를 열수 있나요?",
    "contents": "수동제어로 아차키앱에 등록된 차량의 트렁크를 열 수 있습니다. 단, 차키권한을 소유하고 있고 통신에 문제가 없는 환경(위치서비스 항시 허용, 블루투스 활성화)에서 정상적인 작동이 가능합니다.",
    "rowNum": 110,
    "totalCount": 121
  },
  {
    "id": 120,
    "title": "아차키앱에서 등록된 차량의 후석 슬라이딩 도어를 열수 있나요?",
    "contents": "수동제어로 아차키앱에 등록된 차량의 후석슬라이딩 도어를 열 수 있습니다. 단 해당 차량에 후석슬라이등 도어 기능이 있어야 하며 아차키본체(스마트박스)제작시 해당 기능과 아차키앱에 제공되는 수동제어 키가 설정되어 있어야 합니다. 그리고 차키권한을 소유하고 있고 통신에 문제가 없는 환경(위치서비스 항시 허용, 블루투스 활성화)에서 정상적인 작동이 가능합니다.<br/>\r\n만약 아차키를 설치하는 차량이 카니발과 같은 밴차량으로 슬라이딩도어 기능을 사용하려면 주문시 해당 내용을 별도로 요청해야 원하는 기능을 사용할 수 있습니다. 단 이런 경우 앱에서 제공하는 네번째 키에 고정 적용되는 경적은 사용이 불가능하게 됩니다.",
    "rowNum": 113,
    "totalCount": 121
  },
]

const Accordions = () => {
  //1. 현재 열려있는 자식 아이디를 set하기
  const [expandId, setExpandId] = useState();


  // const [openAccordionIndex, setOpenAccordionIndex] = useState();
  // const [isExpand, setIsExpand] = useState(false);

  // const handleContents = (id) => {
  //   console.log(id)
  //   currentItems.map((item) =>
  //     item.id !== id
  //       ? console.log('다름', item.id !== id)
  //       : console.log('같아!', item.id !== id))
  //
  //   setIsExpand(prev => !prev);
  // }

  return (
    <>
      <p>다른 컨텐츠가 열면 열려있던 컨텐츠가 닫혀야합니다.</p>
      {/*{currentItems.map((item) => (*/}
      {/*  <div key={item.id}>*/}
      {/*    <AccordionInner item={item} handleContents={handleContents} isExpand={isExpand}/>*/}
      {/*  </div>*/}
      {/*))}*/}
      {currentItems.map((item, index) => (
        <div key={index}>
          <AccordionInner
            item={item}
            // 2. isExpand => 클릭한 놈의 아이디를 현재 열려있는 자식 아이디가 같다면 열리게 함
            // 다르면 접어!
            isExpand={expandId === item.id}
            // 3. onExpand => 클릭한 놈의 아이디를 현재 열려있는 자식 아이디로 세팅
            // onExpand={() => setExpandId(item.id)}
            // 4. 같은 버튼 눌렀을 때 다시 닫히게 하기
            // 클릭한 놈의 아이디와 현재 열려있는 자식의 아이디가 똑같으면
            // expandId를 null 로 변경하기
            onExpand={() => expandId === item.id ? setExpandId(null) :setExpandId(item.id)}
          />
        </div>
      ))}
    </>
  )
}

const AccordionInner = ({item, isExpand, onExpand}) => {


  return (
    <>
      {item.title}
      <button onClick={onExpand}>+</button>
      {isExpand === true &&
      <div>{item.contents}</div>}
    </>
  )
}

export default Accordions
