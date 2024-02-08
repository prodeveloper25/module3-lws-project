import { useContext } from "react";
import { toast } from "react-toastify";
import deleteImg from "../../assets/delete.svg";
import checkout from "../../assets/icons/checkout.svg";
import { MovieContext, ThemeContext } from "../../context/Context";
import { getImageUrl } from "../../utils/cine-utility";

const MovieCart = ({ onClose }) => {
  const { darkMode } = useContext(ThemeContext);
  const { cartData, setCartData } = useContext(MovieContext);
  const handleDeleteCart = (mv) => {
    const deletemovie = cartData.filter((item) => item.id !== mv.id);
    setCartData(deletemovie);
    toast.success("Movie is deleted successfully");
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div
          className={`${
            darkMode
              ? "dark  shadow-md rounded-2xl overflow-hidden p-5 md:p-9"
              : " bg-white shadow-md  rounded-2xl overflow-hidden p-5 md:p-9"
          }`}
        >
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>

          {cartData.length > 0 ? (
            cartData.map((item) => (
              <div
                key={item.id}
                className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14"
              >
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="rounded w-12 overflow-hidden"
                      src={getImageUrl(item.cover)}
                      alt=""
                    />
                    <div>
                      <h3 className="text-base md:text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="max-md:text-xs text-[#575A6E]">
                        {item.genre}
                      </p>
                      <span className="max-md:text-xs">${item.price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <button
                      onClick={() => handleDeleteCart(item)}
                      className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white cursor-pointer"
                    >
                      <img className="w-5 h-5" src={deleteImg} alt="delete" />
                      <span className="max-md:hidden">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-lg py-8 text-center ">
              Movie is not found, Please{" "}
              <span className="text-primary">add a new movie</span>
            </h2>
          )}
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={checkout} width="24" height="24" alt="checkout" />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-500 font-semibold text-sm cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCart;
