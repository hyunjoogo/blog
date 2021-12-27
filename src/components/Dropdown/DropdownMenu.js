import React, {useState} from "react";
import styled from "styled-components";

const Dropdown = styled.div`
  width: 335px;
  height: 68px;
  background-color: white;
`;
const DropdownSelect = styled.div`
  border: solid 1px #d8d8d8;
  padding: 24px 24px 23px;
  display: flex;
  justify-content: space-between;
`;
const DropdownSelectLeft = styled.div`
  width: 76px;
  padding-right: 24px;
  font-size: 18px;
`;
const DropdownSelectRight = styled.div`
  cursor: pointer;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

const DropdownList = styled.div`
  border: solid 1px #d8d8d8;
  width: 335px;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s linear, visibility 0.2s linear;
`;

const DropdownListItem = styled.div`
  font-size: 18px;
  background-color: white;

  :hover {
    background-color: #d8d8d8;
  }
`;

const ItemName = styled.div`
  cursor: pointer;
  padding: 12px 0 12px 100px;
`;


const DropdownMenu = ({getData, dataList, level, categoryName, selectedName, setSelectedName}) => {
  const [openList, setOpenList] = useState(false);
  // const [selectedName, setSelectedName] = useState("선택해주세요.")


  const changeStyle = () => setOpenList(prev => !prev)

  const setItem = (event) => {
    const {target: {dataset: {id, name}}} = event;
    setSelectedName(name)
    getData(id, level)
    setOpenList(prev => !prev);
  }
  return (
    <Dropdown>
      <DropdownSelect>
        <DropdownSelectLeft>{categoryName}</DropdownSelectLeft>
        <DropdownSelectRight onClick={changeStyle}>
          <span>{selectedName}</span>
          <img src="/resource/images/arrow-down.svg"/>
        </DropdownSelectRight>
      </DropdownSelect>
      <DropdownList style={openList ? {opacity: "1", visibility: "visible"} : null}>
        {dataList?.map(({cateId, cateName}) => (
          <DropdownListItem data-name={cateName} data-id={cateId} key={cateId}>
            <ItemName data-name={cateName} data-id={cateId} onClick={setItem}>{cateName}</ItemName>
          </DropdownListItem>
        ))}
      </DropdownList>
    </Dropdown>
  )
}

export default DropdownMenu;
