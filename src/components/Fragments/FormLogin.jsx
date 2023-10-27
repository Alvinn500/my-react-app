import InputForm from "../Elements/input";
import Button from "../Elements/button/button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/my-react-app/product";
  };
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />

      <Button color="bg-blue-600" custom="w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
