import InputForm from "../Elements/input";
import Button from "../Elements/button/button";

const FormLogin = () => {
  const handleLogin = () => {
    console.log("mmk");
  };
  return (
    <form>
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

      <Button color="bg-blue-600" custom="w-full" onClick={handleLogin}>
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
