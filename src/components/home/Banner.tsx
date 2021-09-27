import {
  Box,
  Flex,
  Img,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      bgImg={'night-sky.jpg'}
      backgroundPosition="0 70%"
      px={['4', '4', '24']}
      position="relative"
    >
      <SimpleGrid
        templateColumns={['1fr', '1fr', '1fr 1fr']}
        py={['7', '7', '20']}
        px={['0', '0', '10']}
      >
        <Box alignSelf="center">
          <Text
            mb="5"
            fontSize={['2xl', '4xl']}
            color="gray.50"
            fontWeight="medium"
          >
            5 Continentes,
            <br />
            infinitas possibilidades
          </Text>
          <Text fontSize={['md', 'xl']} color="gray.100">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {isWideVersion && (
          <Flex justify="flex-end">
            <Img src="airplane.svg" position="absolute" />
          </Flex>
        )}
      </SimpleGrid>
    </Box>
  );
}
