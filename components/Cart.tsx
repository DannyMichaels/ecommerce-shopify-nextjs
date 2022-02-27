import { useState } from 'react';
import { useStore } from '../store';
import shallow from 'zustand/shallow';
import { CloseIcon } from '@chakra-ui/icons/src/Close';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Flex,
  Text,
  Spinner,
} from '@chakra-ui/react';
import Image from './Image';
import Link from 'next/link';

export default function Cart() {
  const [isRemoving, setIsRemoving] = useState(false);
  const { setIsCartOpen, isCartOpen, checkout, removeLineItem } = useStore(
    (store) => ({
      setIsCartOpen: store.setIsCartOpen,
      isCartOpen: store.isCartOpen,
      checkout: store.checkout,
      removeLineItem: store.removeLineItem,
    }),
    shallow
  );

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

          <DrawerBody>
            {checkout.lineItems &&
              checkout.lineItems.map((item) => (
                <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                  <Flex alignItems="center" justifyContent="center">
                    {!isRemoving ? (
                      <CloseIcon
                        cursor="pointer"
                        onClick={async () => {
                          if (isRemoving) return;

                          setIsRemoving(true);
                          await removeLineItem(item.id);
                          setIsRemoving(false);
                        }}
                      />
                    ) : (
                      <Spinner />
                    )}
                  </Flex>
                  <Flex alignItems="center" justifyContent="center">
                    <Image
                      // @ts-ignore
                      src={item.variant?.image.src}
                      alt={item.title}
                      width={1920}
                      height={1080}
                      objectFit="contain"
                    />
                  </Flex>

                  <Flex alignItems="center" justifyContent="center">
                    <Text>{item.title}</Text>
                  </Flex>

                  {/*  @ts-ignore */}
                  <Flex alignItems="center" justifyContent="center">
                    <Text>${item.variant.price}</Text>
                  </Flex>
                </Grid>
              ))}
          </DrawerBody>

          <DrawerFooter>
            <Button w="100%">
              <Link w="100%" href={checkout.webUrl}>
                Checkout
              </Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
