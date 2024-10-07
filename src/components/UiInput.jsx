import React from "react";

const UiInput = ({
  lable = "text",
  name,
  value,
  placeholder,
  customClass,
  onChange,
}) => {
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      className={customClass}
      onChange={onChange}
    />
  );
};
export default UiInput;
