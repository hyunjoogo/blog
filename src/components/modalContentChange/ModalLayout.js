import React from "react";
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

const ModalLayout = ({child, isOpenModal, setContent}) => {
  return (
    <>
      {isOpenModal ?
        <>
          <ModalBox>
            {React.cloneElement(child, {
              setContent: setContent
            })}
          </ModalBox>
        </> : null}
    </>
  )
}

export default ModalLayout
