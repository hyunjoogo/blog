import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const OpenBtn = styled.button`
  background-color: burlywood;
  
`;

const ModalBox = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  left: 50px;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  padding: 20px 20px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -1px;
`;

const Modal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(prev => !prev)


  return (
    <Wrapper>
      <OpenBtn onClick={openModal}>모달 오픈</OpenBtn>
      {isOpenModal ? <ModalBox>Content</ModalBox> : null}
    </Wrapper>
  )
}

export default Modal
