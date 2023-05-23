import { useCart } from "../context/CartContext";

const CartAside = () => {

    const {cartOpen, setCartOpen} = useCart();

if (!cartOpen) {
    return null
}

  return (
    <aside className='sticky right-0 top-0 w-[300px] h-screen bg-red-400'>
      <button onClick={()=> setCartOpen(false)}> sluit wagentje</button>
    </aside>
  )
}

export default CartAside