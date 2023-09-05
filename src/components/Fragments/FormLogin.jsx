import InputForm from "../Elements/input";
import Button from "../Elements/button/button";

const FormLogin = () => {
  return (
    <form action="">
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

      <Button color="bg-blue-600" custom="w-full">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
