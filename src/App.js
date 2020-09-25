import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import NewGroup from "./newGroup";
import SelectGroup from "./selectGroup";
import Product from "./product";

import "./App.css"

function App() {
  const [newGroup, setNewGroup] = useState("");
  const [allGroups, setAllGroups] = useState([
    {groupName: "meat", id: uuid()},
   {groupName: "fish", id: uuid()}]);
  const [selectGroup, setSelecteGroup] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [product, setProduct] = useState([
    { groupName: "meat", productName: "beaf", id: uuid() },
    { groupName: "meat", productName: "beaf", id: uuid() },
    { groupName: "fish", productName: "fish1", id: uuid() },
    { groupName: "fish", productName: "fish2", id: uuid() },
    { groupName: "fish", productName: "fish3", id: uuid() },
  ]);

  //this runs once when the app start
  useEffect(() => {
    getLocalProduct()
    getLocalGroup()
  }, [])

  // use effect
  useEffect(() => {
    saveLocalGroup()
    saveLocalProduct()
  }, [allGroups, product]);

  // adding new group
  const newGroupHandler = (e) => {
    setNewGroup({groupName: e.target.value, id: uuid()});
    // console.log(e.target.value)
  };
  const submitNewGroupHandler = (e) => {
    e.preventDefault();
    setAllGroups([...allGroups, newGroup]);
    setNewGroup("");
  };

  //  select Group and Product
  const submitSelectGroupHandler = (e) => {
    e.preventDefault();
    setProduct([
      ...product,
      { groupName: selectGroup, productName: selectProduct , id : uuid()},
    ]);
    setSelectProduct("");
    // setSelecteGroup("");
  };

  // Save to local storage
  const saveLocalGroup = () => {
    localStorage.setItem("group", JSON.stringify(allGroups))
  };
  const saveLocalProduct = () => {
    localStorage.setItem("product", JSON.stringify(product))
  };



  // Get from local storage
  const getLocalGroup = () => {
    if (localStorage.getItem("group") === null) {
      localStorage.setItem("group", JSON.stringify([]))
    } else {
      let groupLocal = JSON.parse(localStorage.getItem("group"));
      setAllGroups(groupLocal)
    }
  };
  const getLocalProduct = () => {
    if (localStorage.getItem("product") === null) {
      localStorage.setItem("product", JSON.stringify([]))
    } else {
      let productLocal = JSON.parse(localStorage.getItem("product"));
      setAllGroups(productLocal)
    }
  };

  return (
    <div className="App">
      <NewGroup
        // value={newGroup.groupName}
        newGroupChange={newGroupHandler}
        submitNewGroup={submitNewGroupHandler}
      />

      <SelectGroup
        allGroups={allGroups}
        setSelecteGroup={setSelecteGroup}
        setSelectProduct={setSelectProduct}
        submitSelectGroup={submitSelectGroupHandler}
        selectGroup={selectGroup}
        selectProduct={selectProduct}
      />

      <hr />

      {selectGroup ? (
        <>
        
          <Product
            product={product}
            selectGroup={selectGroup}
            setProduct={setProduct}
          />
        </>
      ) : null}
    </div>
  );
}
export default App;

