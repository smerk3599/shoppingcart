import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

export const ProductList = () => {
  useTitle("Products");

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
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 79,
      image: "assets/images/1003.png",
    },
    {
      id: 4,
      name: "Logitech 111 Wired",
      price: 39,
      image: "assets/images/1004.png",
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: "assets/images/1005.png",
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: "assets/images/1006.png",
    },
  ];

  return (
    <main>
      <section className="productList">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};
