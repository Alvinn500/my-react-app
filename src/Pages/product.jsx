import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "1.000.000",
    imgae: "/images/shoes.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic fugit
          reiciendis esse voluptatem voluptatum nobis quia illum natus
          doloribus, dicta neque quis odio provident. Molestiae cumque
          reprehenderit saepe hic!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "500.000",
    imgae: "/images/shoes.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic fugit
          reiciendis esse voluptatem voluptatum nobis quia illum natus
          doloribus, dicta neque quis odio providen`,
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.imgae} />
          <CardProduct.Body name={product.name}>
            {product.desc}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
