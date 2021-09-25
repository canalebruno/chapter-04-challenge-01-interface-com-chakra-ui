import { Box, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideProps {
  image: string;
  title: string;
  subtitle?: string;
  href?: string;
}

export function Slide({ image, title, subtitle, href }: SlideProps) {
  return (
    <Box bgImage={image} bgSize="cover" h="100%">
      <Flex
        bg="rgba(0,0,0,0.3)"
        h="100%"
        direction="column"
        justify="center"
        align="center"
      >
        {!!href ? (
          <Link href={href} passHref>
            <ChakraLink as="a" style={{ textDecorationColor: 'white' }}>
              <Text color="white" fontSize="5xl" fontWeight="bold">
                {title}
              </Text>
            </ChakraLink>
          </Link>
        ) : (
          <Text color="white" fontSize="5xl" fontWeight="bold">
            {title}
          </Text>
        )}

        <Text fontWeight="bold" fontSize="2xl" color="white">
          {subtitle}
        </Text>
      </Flex>
    </Box>
  );
}
