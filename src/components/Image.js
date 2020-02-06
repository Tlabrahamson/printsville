import React, { useContext } from "react";
import useHover from "../hooks/useHover";
import { Context } from "../Context";
import PropTypes from "prop-types";

const Image = ({ className, img }) => {
  const [isHovered, ref] = useHover();
  const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(
    Context
  );

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div ref={ref} className={`${className} image-container`}>
      <img src={img.url} alt="printsville" className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
};

export default Image;
