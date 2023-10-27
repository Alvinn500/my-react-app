import { forwardRef } from "react";
import PropTypes from "prop-types";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

Input.displayName = "Input";
Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
