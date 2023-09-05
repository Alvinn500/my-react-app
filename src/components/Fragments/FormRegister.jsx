import InputForm from "../Elements/input";
import Button from "../Elements/button/button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your fullname here..."
        name="fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="Password"
        placeholder="example@mail.com"
        name="confirmPassword"
      />

      <Button color="bg-blue-600" custom="w-full">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
