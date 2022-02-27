import React from 'react';
import shallow from 'zustand/shallow';
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
  Grid,
  Flex,
  Text,
  Spinner,
  Box,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function NavMenu() {
  const { isMenuOpen, setIsMenuOpen } = useStore(
    (store) => ({
      isMenuOpen: store.isMenuOpen,
      setIsMenuOpen: store.setIsMenuOpen,
    }),
    shallow
  );
  return (
    <Drawer
      isOpen={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      placement="left"
      size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack p="2rem">
              <Link href="/">About Us</Link>
              <Link href="/">Learn More</Link>
              <Link href="/">Sustainability</Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign="center">
            <Text w="100%">&copy; Daniel 2022</Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
