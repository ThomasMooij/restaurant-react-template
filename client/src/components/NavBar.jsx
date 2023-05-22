import NavItem from "./NavItem";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const NavBar = ({topPage , selectedPage, setSelectedPage }) => {

  const { cartItems, setCartItems} = useCart();
  const backgroundColor = topPage ? '' : 'bg-[#dbdbce]';

  return (
    <nav className={`${backgroundColor} fixed top-0 z-999 w-full p-4`} >
      <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        {/* LOGO */}
        <article className="pl-4 flex items-center border-r-2 divide-orange-600 p-4">
          <h2 className="text-red-600 text-2xl font-bold">PAPUAPA GRANADA</h2>
        </article>
        {/* MAIN CONTENT */}
        <div className="flex  gap-x-10 text-center">
            <NavItem 
            page={'Inicio'}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
              <NavItem 
            page={'Menu'}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
              <NavItem 
            page={'Reservation'}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
              <NavItem 
            page={'Photos'}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
        </div>
        {/* CONTACT INFO */}
        <div>
          <article className="border-l-2 divide-orange-600 p-4 grid grid-cols-3 place-items-center">
            <div>
             <Link to="/cart" className="bg-white p-4 rounded-[50%]"><ShoppingCartOutlinedIcon />{cartItems.length}</Link> 
            </div>
            <div className="flex flex-col items-center  cursor-pointer">
                <span>ENG</span>
                <ArrowDropDownIcon />
            </div>
            <div>
                <h2>Address: SomePlace 111</h2>
                <h2>Phone: SomeNumber</h2>
            </div>
          </article>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
