import React from "react";
import PropTypes from "prop-types";

import { getImgUrl } from "../../utils/getImgUrl";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { title, description, coverImage, oldPrice, newPrice, _id } = book;

  return (
    <div className="rounded-lg transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4 p-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${_id}`}>
            <img
              src={`${getImgUrl(coverImage)}`}
              alt={title}
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${_id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {title}
            </h3>
          </Link>

          <p className="text-gray-600 mb-5">
            {description.length > 80
              ? `${description.slice(0, 80)}...`
              : description}
          </p>
          <p className="font-medium mb-5">
            ${newPrice}
            <span className="line-through font-normal ml-2">{oldPrice}</span>
          </p>

          <button
            onClick={() => handleAddToCart(book)}
            className="btn-primary px-6 space-x-1 flex items-center gap-1"
          >
            <MdAddShoppingCart className="size-6" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    oldPrice: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
