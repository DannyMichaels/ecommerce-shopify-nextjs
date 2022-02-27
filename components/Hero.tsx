import React from 'react';
import { Box, Button, Text, Center } from '@chakra-ui/react';
import Image from './Image';

export default function Hero() {
  return (
    <Box backgroundColor="#FFA8E2" w="100%" position="relative" h="70vh">
      <Image
        layout="fill"
        src="/images/bombs_group_2.png"
        placeholder="blur"
        blurDataURL="/images/bombs_group_2.png"
        alt="Bath Bombs"
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={['top', 'center']}
      />
      <Text
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="#fff"
        fontWeight="bold"
        fontSize="4rem">
        Introducing Bath Bombs
      </Text>
      <Center>
        <Button
          w="10rem"
          backgroundColor="#FF388D"
          color="#fff"
          _hover={{ opacity: '70%' }}
          position="absolute"
          bottom="10%">
          Shop Now
        </Button>
      </Center>
    </Box>
  );
}
