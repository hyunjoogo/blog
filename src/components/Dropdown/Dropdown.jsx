import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import DropdownMenu from "./DropdownMenu";

const API = process.env.REACT_APP_API_URL


const Dropdown = () => {


  const [carTypeCd, setCarTypeCd] = useState("");
  const [carTypeName, setCarTypeName] = useState("선택해주세요.")
  const [manufacturer, setManufacturer] = useState("");
  const [manufacturerName, setManufacturerName] = useState("선택해주세요");
  const [modelNameCd, setModelNameCd] = useState("");
  const [modelName, setModelName] = useState("선택해주세요.")
  const [manufacturerList, setManufacturerList] = useState([]);
  const [modelNameList, setModelNameList] = useState([]);

// 선택한값에 대한 다음 레벨 자료 가지고 오기
  const getData = async (id, level) => {
    if (level === 1) {
      setModelNameList([])
      setManufacturer("")
      setManufacturerName("선택해주세요.")
      setModelNameCd("")
      setModelName("선택해주세요.")
      const response = await fetch(`${API}/api/v1/achakey/install/division?level=${level + 1}&parentCateId=${id}`);
      const json = await response.json();
      setManufacturerList(json.data);
      setCarTypeCd(id);
    }
    if (level === 2) {
      setModelName("선택해주세요.")
      setModelNameCd("")
      const response = await fetch(`${API}/api/v1/achakey/install/division?level=${level + 1}&parentCateId=${id}`);
      const json = await response.json();
      setModelNameList(json.data);
      setManufacturer(id)
    }
    if (level === 3) {
      setModelNameCd(id)
    }
  }

  const onSubmit = () => {
    console.log(carTypeCd, manufacturer, modelNameCd)
  }

  return <div style={{backgroundColor: "whitesmoke", height: "100vh"}}>
    <div style={{backgroundColor: "whitesmoke", height: "20vh"}}></div>
    <DropdownMenu getData={getData} level={1} categoryName="분류" selectedName={carTypeName} setSelectedName={setCarTypeName}
                  dataList={[{"cateId": 1, "cateName": "국산차"}, {"cateId": 2, "cateName": "수입차"},]}/>
    {/*<DropdownMenu getData={getData} level={2} categoryName="제조사" selectedName={manufacturerName} setSelectedName={setManufacturerName}*/}
    {/*              dataList={manufacturerList}/>*/}
    {/*<DropdownMenu getData={getData} level={3} categoryName="모델명" selectedName={modelName} setSelectedName={setModelName}*/}
    {/*              dataList={modelNameList}/>*/}
    <button onClick={onSubmit}>제출</button>
  </div>
}

export default Dropdown
