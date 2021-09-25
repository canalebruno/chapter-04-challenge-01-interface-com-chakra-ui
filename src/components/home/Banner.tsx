import { Box, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Box
      bgImg={'night-sky.jpg'}
      backgroundPosition="0 70%"
      px="24"
      position="relative"
    >
      <SimpleGrid templateColumns="1fr 1fr" py="20" px="10">
        <Box alignSelf="center">
          <Text mb="5" fontSize="4xl" color="gray.50" fontWeight="medium">
            5 Continentes,
            <br />
            infinitas possibilidades
          </Text>
          <Text fontSize="xl" color="gray.100">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Flex justify="flex-end">
          <Img src="airplane.svg" position="absolute" />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
