import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";
import { CartCard } from "../components/CartCard";

export const CartList = () => {
  const { cartList, total } = useCart();

  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          CartItems: {cartList.length} / $ {total}
        </h1>
        {cartList.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};
