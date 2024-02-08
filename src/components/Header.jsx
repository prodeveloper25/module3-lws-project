import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context/Context";
import MovieCart from "./Movies/MovieCart";

const Header = () => {
  const [showMovieCart, setShowMovieCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header>
      {showMovieCart && <MovieCart onClose={() => setShowMovieCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] cursor-pointer p-1 inline-block"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className=" bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] cursor-pointer p-1 inline-block"
              onClick={() => setShowMovieCart(true)}
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <h3 className="w-[24px] h-[24px] -ml-5 text-white -mt-7 text-center bg-primary font-semibold  rounded-full">
              {cartData.length > 0 ? cartData.length : 0}
            </h3>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
