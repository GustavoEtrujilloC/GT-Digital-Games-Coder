import "../CartWidget/CartWidget.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { FaCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const CartWidget = ({ onClickModal }) => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="CartWidget" onClick={onClickModal}>
      <div className="badgeContainer">
        {cartQuantity() > 0 && <FaCircle className="shoppingBadge" />}
        {cartQuantity() > 0 && (
          <span className="itemsNumber">{cartQuantity()}</span>
        )}
        <FaShoppingBag className="shoppingCart" onClick={onClickModal} />
      </div>
    </div>
  );
};

export default CartWidget;
