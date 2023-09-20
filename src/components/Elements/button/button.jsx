const Button = (props) => {
  const { children = "empty", color, custom, onClick } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${color} ${custom} text-white`}
      type="submit"
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
