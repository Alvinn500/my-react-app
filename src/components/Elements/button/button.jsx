const Button = (props) => {
  const {
    children = "empty",
    color,
    custom,
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${color} ${custom} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
