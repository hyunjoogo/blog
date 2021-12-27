import React, {createElement} from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  left: 50px;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.65);
  margin: 0 auto;
  padding: 20px 20px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -1px;
`;

const ModalLayout = (props) => {
  const {children, setContent, isOpenModal} = props;
  return (
    <ModalBox>
      {React.cloneElement(children, {setContent, isOpenModal})}
    </ModalBox>
  )
}

export default ModalLayout
