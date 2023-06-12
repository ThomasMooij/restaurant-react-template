import { useCart } from "../context/CartContext";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from "react-router-dom";


const Cart = () => {

  const { cartItems,removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
   <nav className="w-screen h-6 bg-black flex items-center justify-center"><Link to="/" className="text-white"><HomeOutlinedIcon /></Link></nav>
    <div className="flex flex-col items-center justify-center min-h-screen bg-beige-100">
      <h1 className="text-3xl font-bold mb-6">Winkelwagen</h1>
      <div className="w-96 bg-white rounded-lg shadow-lg p-6">
        {cartItems?.map(item => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div>
              {console.log(item.id)}
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-700">Product id: {item.id}</p>
              <p className="text-gray-700">Aantal: {item.quantity}</p>
            </div>
            <p className="text-gray-700">Subtotaal: €{(item.price * item.quantity)}</p>
            <button className="" onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
        <div className="flex items-center justify-between mt-6">
          <h2 className="text-lg font-bold">Totaal:</h2>
          <p className="text-xl font-bold">€{totalPrice}</p>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6">
          Bestellen
        </button>
      </div>
    </div>
    </>
  );
}

export default Cart