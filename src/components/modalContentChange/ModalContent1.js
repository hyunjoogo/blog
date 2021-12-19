import ModalContent2 from "./ModalContent2";

const ModalContent1 = ({setContent}) => {

  return (
    <>
      <h1>컨텐츠1</h1>
      <div onClick={()=>setContent(<ModalContent2/>)}>컨텐츠2로 이동</div>
    </>
  )
}
export default ModalContent1
