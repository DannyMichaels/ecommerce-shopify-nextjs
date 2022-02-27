import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';

interface RichTextProps {
  heading: string;
  text?: string;
}

export default function RichText({ heading, text }: RichTextProps) {
  return (
    <Box p="1rem">
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading py="2.5rem">{heading}</Heading>
        {text && <Text pb="2rem">{text}</Text>}
      </Center>
    </Box>
  );
}
