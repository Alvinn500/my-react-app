import { useContext, useEffect, useState } from "react";
// import Button from "../components/Elements/button/button";
import CardProduct from "../components/Fragments/CardProduct";
// import Counter from "../components/Fragments/classStateFull";
import { getProducts } from "../services/product.service";
// import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1000000,
//     imgae: "/images/shoes.jpg",
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic fugit
//           reiciendis esse voluptatem voluptatum nobis quia illum natus
//           doloribus, dicta neque quis odio provident. Molestiae cumque
//           reprehenderit saepe hic!`,
//   },
//   {
//     id: 2,
//     name: "Sepatu Lama",
//     price: 500000,
//     imgae: "/images/shoes.jpg",
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic fugit
//           reiciendis esse voluptatem voluptatum nobis quia illum natus
//           doloribus, dicta neque quis odio providen`,
//   },
//   {
//     id: 3,
//     name: "Sepatu Tengah",
//     price: 700000,
//     imgae: "/images/shoes.jpg",
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic fugit
//           reiciendis esse voluptatem voluptatum nobis quia illum natus
//           doloribus, dicta neque quis odio providen`,
//   },
// ];

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  useLogin();

  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products]);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.href = "/my-react-app/login";
  // };

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // use Ref

  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = () => {
  //   cartRef.current = [...cartRef.current, { id: 1, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // const totalPriceRef = useRef(null);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="w-2/3 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              // eslint-disable-next-line react/jsx-key
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  // handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
          {/* <ul>
            {cart.map((item) => (
              <li key={item.name}>{item.id}</li>
            ))}
          </ul> */}
          {/* <table className="text-left table-auto border-separate border-spacing-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  // console.log(product.id);
                  // console.log(item);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-5">
        <Counter />
      </div> */}
    </>
  );
};

export default ProductPage;
