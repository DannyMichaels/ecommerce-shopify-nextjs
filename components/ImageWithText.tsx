import React from 'react';
import { Box, Flex, Button, Text, Image, Heading } from '@chakra-ui/react';

export default function ImageWithText({
  reverse,
  image,
  heading,
  text,
}: {
  reverse?: boolean;
  image: string;
  heading?: string;
  text?: string;
}) {
  const reverseSection = reverse ? 'row-reverse' : 'row';
  return (
    <Box>
      <Flex flexDir={['column', reverseSection]} w="100%">
        <Image
          src={image}
          alt="Image with text"
          objectFit="cover"
          w={['100%', '50%']}
        />

        <Flex
          w={['100%', '50%']}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem">
          {heading && <Heading p="2rem">{heading}</Heading>}
          {text && <Text p="2rem">{text}</Text>}

          <Button
            w="10rem"
            backgroundColor="#FF38DD"
            color="#fff"
            _hover={{ opacity: '70%' }}>
            Buy Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
