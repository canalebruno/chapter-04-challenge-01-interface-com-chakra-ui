import { Box, Flex, Text } from '@chakra-ui/react';

interface ContinentBannerProps {
  image: string;
  title: string;
}

export function ContinentBanner({ image, title }: ContinentBannerProps) {
  return (
    <Box
      bgImage={image}
      bgSize="cover"
      bgPosition="0 50%"
      w="100vw"
      maxW={1440}
      h={500}
    >
      <Flex px="24" bg="rgba(0,0,0,0.35)" w="100%" h="100%" align="flex-end">
        <Text
          ml="10"
          mb="16"
          color="white"
          fontSize="5xl"
          fontWeight="semibold"
        >
          {title}
        </Text>
      </Flex>
    </Box>
  );
}
