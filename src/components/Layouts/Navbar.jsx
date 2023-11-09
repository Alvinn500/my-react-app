import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/button/button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { UseTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  const { total } = UseTotalPrice();

  const username = useLogin();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/my-react-app/";
  };

  return (
    <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
      {username}
      <Button custom="ml-5" color="bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md mx-5">
        item : {totalCart} | price : $ {total}
      </div>
      <Button color="bg-black" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
