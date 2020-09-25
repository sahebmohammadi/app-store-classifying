import React from "react";
const newGroup = (props) => {
  const { newGroupChange, submitNewGroup } = props;
  // console.log(value)

  return (
    <>
        <p className="hint">
          {" "}
          Hint : you can add your new group, if not just existed
        </p>
      <div className="newGroup">
        <div>
          <input
            placeholder="New Group"
            type="text"
            onChange={newGroupChange}
            // value={value}
          />
        </div>
        <div>
          <button onClick={submitNewGroup} type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default newGroup;
