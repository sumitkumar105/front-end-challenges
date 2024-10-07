import React from "react";

const UiButton = ({ lable, customClass, onClick }) => {
  return (
    <button onClick={onClick} className={customClass}>
      {lable}
    </button>
  );
};
export default UiButton;
