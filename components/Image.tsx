import NextImage from 'next/image';
import { chakra } from '@chakra-ui/react';

// combine next and chakra Image
const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
      'layout',
    ].includes(prop),
});

export default Image;
