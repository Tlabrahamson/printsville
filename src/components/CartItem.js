import React, { useContext } from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
import { Context } from "../Context";

const CartItem = ({ item }) => {
  const [isHovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  const hoverClassName = isHovered ? "fill" : "line";

  return (
    <div className="cart-item">
      {
        <i
          className={`ri-delete-bin-${hoverClassName}`}
          onClick={() => removeFromCart(item.id)}
          ref={ref}
        ></i>
      }
      <img src={item.url} alt="print thumb" width="130px" />
      <p>$5.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default CartItem;
