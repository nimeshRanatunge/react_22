import React from "react";

const Input = ({ type, onKeyDown, Placeholder }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      onKeyDown={onKeyDown}
      placeholder={Placeholder}
    />
  );
};

const forwardedInput = React.forwardRef(Input);
export default forwardedInput;
