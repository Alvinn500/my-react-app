const Button = (props) => {
  const { children = "empty", color, custom } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${color} ${custom} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
