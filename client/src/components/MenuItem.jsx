import Items from "../data/items.json";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useCart } from "../context/CartContext";

const MenuItem = ({ category }) => {
  // Filter de items op basis van de categorie
  const filteredItems = Items.filter((item) => item.category === category);
  const {
    increaseCart,
    decreaseCart,
    getItemQuantity,
    removeFromCart,
    cartItems,
    cartOpen,
    setCartOpen,
  } = useCart();

  return (
    <div className="w-screen h-screen max-h-full max-w-full flex justify-center">
      <div className="flex flex-col gap-2">
        {filteredItems.map((item) => (
          <div className="flex gap-4 items-center" key={item.id}>
            <div className="rounded-lg shadow-lg p-6 border-yellow-300">
              <h2 className="text-xl font-bold mb-4">{item.name}</h2>
              <p className="text-gray-700">{item.description}</p>
              <div className="flex gap-4 items-center mt-6">
                <span className="text-gray-600 font-bold">{item.price}</span>

                {getItemQuantity(item.id) > 0 && item.category === category ? (
                  <button onClick={() => decreaseCart(item.id)}>-</button>
                ) : null}

                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => increaseCart(item.id)}
                >
                  {" "}
                  {getItemQuantity(item.id) > 0 ? (
                    <p>
                      {cartItems.map((CartItem) => {
                        if (CartItem.id === item.id) {
                          return CartItem.quantity;
                        }
                      })}
                    </p>
                  ) : (
                    <AddShoppingCartOutlinedIcon onClick={() => setCartOpen(true)}/>
                  )}
                </button>

                {getItemQuantity(item.id) > 0 ? (
                  <button onClick={() => increaseCart(item.id)}>+</button>
                ) : null}
              </div>
            </div>
            <img
              className="w-[150px] h-[150px] rounded-[50%]"
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
