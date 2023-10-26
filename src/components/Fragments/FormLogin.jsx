import InputForm from "../Elements/input";
import Button from "../Elements/button/button";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/my-react-app/product";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
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
