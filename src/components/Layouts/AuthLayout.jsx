import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import PropTypes from "prop-types";

const AuthLayout = (props) => {
  const { children, title, type } = props;

  AuthLayout.propTypes = {
    children: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  };

  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }

  return (
    <div
      className={`flex min-h-screen justify-center items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account?"
            : "Alredy have an account"}

          {type === "login" && (
            <Link
              to="/my-react-app/register"
              className="font-bold text-blue-600 ms-1"
            >
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/my-react-app/" className="font-bold text-blue-600 ms-1">
              Login
            </Link>
          )}
        </p>

        {/* <Kondisi type={type} /> */}
      </div>
    </div>
  );
};

// const Kondisi = ({ type }) => {
//   if (type === "login") {
//     return (
//       <p className="text-sm mt-5 text-center">
//         Don't have an account?{""}
//         <Link to="/register" className="font-bold text-blue-600">
//           Register
//         </Link>
//       </p>
//     );
//   } else {
//     return (
//       <p>
//         Alredy have an account?{""}
//         <Link to="/login" className="font-bold text-blue-600">
//           Login
//         </Link>
//       </p>
//     );
//   }
// };

export default AuthLayout;
