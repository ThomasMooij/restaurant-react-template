import NavItem from "./NavItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = ({ topPage, selectedPage, setSelectedPage }) => {
  const { cartItems, setCartItems } = useCart();
  const backgroundColor = topPage ? "" : "bg-[#dbdbce]";
  const [mobile, setMobile] = useState(false);

  let cartTotal = 0;

  if (cartItems.quantity && Array.isArray(cartItems.quantity)) {
    cartItems.quantity.map((item) => {
      cartTotal += item.quantity;
    });
  }

  return (
    <nav className={`${backgroundColor} fixed top-0 z-2999 w-full p-4 mb-3`}>
      <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        {/* LOGO */}
        <article className="pl-4 flex items-center border-r-2 divide-orange-600 p-4">
          <h2 className="text-red-600 text-2xl font-bold">PAPUAPA GRANADA</h2>
        </article>
        {/* MAIN CONTENT */}
        <div className="hidden md:flex gap-x-10 text-center">
          <NavItem
            page={"Inicio"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setMobile={setMobile}
          />
          <NavItem
            page={"Menu"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setMobile={setMobile}
          />
          <NavItem
            page={"Reservation"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setMobile={setMobile}
          />
          <NavItem
            page={"Photos"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setMobile={setMobile}
          />
        </div>
        {/* CONTACT INFO */}
        <div className="hidden md:flex">
          <article className="border-l-2 divide-orange-600 p-4 grid grid-cols-3 place-items-center">
            <div>
              <Link to="/cart" className="bg-white p-4 rounded-[50%]">
                <ShoppingCartOutlinedIcon />
                {cartItems.length}
              </Link>
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
        {/* MOBILE MENU */}
        {!mobile ? (
          <div
            onClick={() => setMobile(true)}
            className="cursor-pointer hover:bg-red-500 md:hidden"
          >
            <MenuIcon />
          </div>
        ) : (
          <ul
            className={
              !mobile
                ? "hidden"
                : "md:hidden absolute text-white top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-6"
            }
          >
            <CloseIcon
              className="cursor-pointer hover:text-red-600"
              onClick={() => setMobile(false)}
            />
            <NavItem
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page={"Inicio"}
              setMobile={setMobile}
            />
            <NavItem
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page={"Menu"}
              setMobile={setMobile}
            />
            <NavItem
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page={"Reservation"}
              setMobile={setMobile}
            />
            <NavItem
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page={"Photos"}
              setMobile={setMobile}
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
