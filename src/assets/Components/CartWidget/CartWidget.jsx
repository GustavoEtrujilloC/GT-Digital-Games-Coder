import "../CartWidget/CartWidget.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { FaCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import CartDrawer from "../Cart/CartDrawer";

const CartWidget = ({}) => {
  const { cartQuantity } = useContext(CartContext);
  const [opened, { open, close }] = useDisclosure(false);

  const handleOpenModal = () => {
    open();
  };

  return (
    <>
      <div className="CartWidget" onClick={handleOpenModal}>
        <div className="badgeContainer">
          {cartQuantity() > 0 && <FaCircle className="shoppingBadge" />}
          {cartQuantity() > 0 && (
            <span className="itemsNumber">{cartQuantity()}</span>
          )}
          <FaShoppingBag className="shoppingCart" />
        </div>
      </div>

      <Drawer opened={opened} onClose={close} size="80%" position="bottom">
        <CartDrawer opened={opened} close={close} />
      </Drawer>
    </>
  );
};

export default CartWidget;
