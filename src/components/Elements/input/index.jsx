import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";
import PropTypes from "prop-types";

const InputForm = forwardRef((props, ref) => {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

InputForm.displayName = "InputForm";
InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputForm;
