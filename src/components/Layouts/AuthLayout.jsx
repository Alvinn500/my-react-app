import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-full max-w-xs">
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
            <Link to="/register" className="font-bold text-blue-600 ms-1">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600 ms-1">
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
