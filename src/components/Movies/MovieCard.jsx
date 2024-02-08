import { useContext, useState } from "react";
import tag from "../../assets/tag.svg";
import { MovieContext } from "../../context/Context";
import { getImageUrl } from "../../utils/cine-utility";
import MovieDetails from "./MovieDetails";
import Rating from "./Rating";

import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);
  const handleAddToCart = (mv) => {
    const found = cartData.find((item) => {
      return item.id === mv.id;
    });
    if (!found) {
      setCartData([...cartData, mv]);
      toast.success("Movie is added successfully");
    } else {
      toast.error("This Movie Already Added");
    }
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowDetails(false);
  };
  const handleMovieSelections = (mv) => {
    setSelectedMovie(mv);
    setShowDetails(true);
  };
  return (
    <>
      {showDetails && (
        <MovieDetails
          movie={selectedMovie}
          onAddToCart={handleAddToCart}
          onClose={handleModalClose}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-gray-300 rounded-xl">
        <div
          onClick={() => handleMovieSelections(movie)}
          className="cursor-pointer"
        >
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
        </div>
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm cursor-pointer"
            onClick={() => handleAddToCart(movie)}
          >
            <img src={tag} alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
