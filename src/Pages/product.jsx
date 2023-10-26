import { useEffect, useState } from "react";
import Button from "../components/Elements/button/button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/classStateFull";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    imgae: "/images/shoes.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic fugit
          reiciendis esse voluptatem voluptatum nobis quia illum natus
          doloribus, dicta neque quis odio provident. Molestiae cumque
          reprehenderit saepe hic!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500000,
    imgae: "/images/shoes.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic fugit
          reiciendis esse voluptatem voluptatum nobis quia illum natus
          doloribus, dicta neque quis odio providen`,
  },
  {
    id: 3,
    name: "Sepatu Tengah",
    price: 700000,
    imgae: "/images/shoes.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic fugit
          reiciendis esse voluptatem voluptatum nobis quia illum natus
          doloribus, dicta neque quis odio providen`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
        {email}
        <Button custom="ml-5" color="bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-2/3 flex flex-wrap">
          {products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.imgae} />
              <CardProduct.Body name={product.name}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <ul>
            {cart.map((item) => (
              <li key={item.name}>{item.id}</li>
            ))}
          </ul> */}
          <table className="text-left table-auto border-separate border-spacing-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                // console.log(product.id);
                // console.log(item);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Counter />
      </div> */}
    </>
  );
};

export default ProductPage;
