import { useStore } from '../store';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from '@chakra-ui/react';

export default function Cart() {
  const { setIsCartOpen, isCartOpen, checkout, removeLineItem } = useStore();

  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={() => setIsCartOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>This is your cart</DrawerBody>

          <DrawerFooter>
            <Button>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
