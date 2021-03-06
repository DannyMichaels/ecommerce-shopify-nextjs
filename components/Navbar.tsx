import { Flex, Icon, Box, Badge } from '@chakra-ui/react';
import { useStore } from '../store';
import { MdMenu, MdShoppingBasket } from 'react-icons/md'; // material design icons
import Image from './Image';
import Link from 'next/link';
import shallow from 'zustand/shallow';

export default function Navbar() {
  const { setIsCartOpen, setIsMenuOpen, checkout } = useStore(
    (store) => ({
      setIsCartOpen: store.setIsCartOpen,
      setIsMenuOpen: store.setIsMenuOpen,
      checkout: store.checkout,
    }),
    shallow
  );

  return (
    <Flex
      backgroundColor="#FFA8E2"
      flexDir="row"
      justifyContent="space-between"
      p="2rem"
      alignItems="center">
      <Icon
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={30}
        h={30}
        onClick={() => setIsMenuOpen(true)}
      />

      <Link href="/" passHref>
        <a>
          <Image src="/images/logo.svg" width={100} height={100} alt="Logo" />
        </a>
      </Link>

      <Flex alignItems="center">
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
          onClick={() => setIsCartOpen(true)}
        />
        <Badge backgroundColor="#FF388D" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Flex>
    </Flex>
  );
}
