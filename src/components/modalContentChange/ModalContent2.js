import ModalContent1 from "./ModalContent1";

const ModalContent2 = ({setContent}) => {

  return (
    <>
      <h1>컨텐츠2</h1>
      <div onClick={() => setContent(<ModalContent1/>)}>컨텐츠1로 이동</div>
    </>
  )
}
export default ModalContent2
