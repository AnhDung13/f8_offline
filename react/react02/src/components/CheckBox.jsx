import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function CheckBox() {
  const datas = ["Check box 1", "Check box 2", "Check box 3", "Check box 4"];
  const checkAllRef = useRef();
  const checkItemRef = useRef([]);
  const getElementCheckbox = (el) => {
    if (datas.length > checkItemRef.current.length) {
      checkItemRef.current.push(el);
    }
  };
  const handleCheckAll = (e) => {
    checkItemRef.current.forEach((el) => {
      el.checked = e.target.checked;
    });
  };
  const handleCheck = () => {
    const checkedItem = checkItemRef.current.filter((el) => el.checked);
    checkedItem.length === datas.length
      ? (checkAllRef.current.checked = true)
      : (checkAllRef.current.checked = false);
  };
  return (
    <div>
      <label>
        <input onChange={handleCheckAll} ref={checkAllRef} type="checkbox" />
        Check all
      </label>
      <hr />
      {datas.map((item, index) => (
        <label key={index} style={{ display: "block" }}>
          <input
            onChange={handleCheck}
            ref={(el) => getElementCheckbox(el)}
            type="checkbox"
          />
          {item}
        </label>
      ))}
    </div>
  );
}
