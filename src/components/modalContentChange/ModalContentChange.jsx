import React, {useState} from "react";
import ModalLayout from "./ModalLayout";
import ModalContent1 from "./ModalContent1";


const ModalContentChange = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(prev => !prev)

  const [content, setContent] = useState(<ModalContent1/>)

  return (
    <>
      <button onClick={openModal}>모달 오픈</button>
      {React.createElement(ModalLayout, {isOpenModal, setContent}, content)}
      {/*<ModalLayout isOpenModal={isOpenModal} setContent={setContent}>*/}
      {/*  {content}*/}
      {/*</ModalLayout>*/}
    </>
  )
}

export default ModalContentChange
