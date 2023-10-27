import InputForm from "../Elements/input";
import Button from "../Elements/button/button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const [routing, setRouting] = useState("/my-react-app/");

  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/my-react-app/product";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        // window.location.href = "/my-react-app/products";
        setRouting("/my-react-app/products");
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Jhon Doe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />

      <Button color="bg-blue-600" custom="w-full" type="submit">
        <Link to={routing}>Login</Link>
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center my-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
