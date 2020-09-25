import React from "react";
const SelectGroup = (props) => {
  const {
    setSelecteGroup,
    allGroups,
    setSelectProduct,
    submitSelectGroup,
    selectProduct,
    selectGroup,
  } = props;
  const selectGroupHandler = (e) => {
    setSelecteGroup(e.target.value);
    // console.log(e.target.value);

  };

  const selectProductHandler = (e) => {
    setSelectProduct(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
    
      <div>
        <div className="select-item">
          <select
            defaultValue={"DEFAULT"}
            id="selectGroup"
            onChange={selectGroupHandler}
          >
            <option className="default-option" value="DEFAULT" disabled>Choose Group</option>
            {allGroups.map((group) => (
                
              <option key={group.id} value={group.groupName}>
                {group.groupName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="product">
        <div>
          <input
          placeholder="Product"
            value={selectProduct}
            id="selectProduct"
            type="text"
            onChange={selectProductHandler}
          />
        </div>
        <div>
          <button onClick={submitSelectGroup}>
                Set
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectGroup;
