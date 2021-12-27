import {useState} from "react";

const currentItems = [
  {title: "1번", content: "1번 컨텐츠"},
  {title: "2번", content: "2번 컨텐츠"},
  {title: "3번", content: "3번 컨텐츠"},
]

const Accordions = () => {
  return (
    <>
      {currentItems.map((item, index) => (
        <div key={index}>
          <AccordionInner item={item} />
        </div>
      ))}
    </>
  )
}

const AccordionInner = ({item}) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleContents = () => {
    setIsExpand(prev => !prev);
  }
  return (
    <>
      {item.title}
      <button onClick={handleContents}>+</button>
      {isExpand &&
      <div>{item.content}</div>}
    </>
  )
}

export default Accordions
