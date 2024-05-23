import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import NavBar from "../NavBar/NavBar";
import Cart from "../Cart/Cart";

function ModalCart() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
      >
        <Cart onClick={close} />
      </Drawer>

      <NavBar onClickModal={open} />

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

export default ModalCart;
