import { CartCard } from "../components/CartCard";

export const CartList = () => {
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "assets/images/1002.png",
    },
  ];

  return (
    <main>
      <section className="cart">
        {products.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};
