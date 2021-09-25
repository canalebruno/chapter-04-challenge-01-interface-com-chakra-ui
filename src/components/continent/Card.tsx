import { Box, Flex, Img, Text } from '@chakra-ui/react';

interface CardProps {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export function Card({ image, city, country, flag }: CardProps) {
  return (
    <Flex direction="column" borderRadius="0.25rem">
      <Img
        src={image}
        alt={city}
        h="10.8rem"
        objectFit="cover"
        borderRadius=" 0.5rem 0.5rem 0 0"
      />
      <Flex
        bg="white"
        p="1.5rem"
        justify="space-between"
        border="1px solid rgba(255, 186, 8, 0.5)"
        borderTop="none"
        align="center"
        borderRadius="0 0 0.25rem 0.25rem"
      >
        <Flex direction="column" fontFamily="Barlow">
          <Text fontWeight="semibold" fontSize="xl">
            {city}
          </Text>
          <Text fontWeight="medium" fontSize="md" color="gray.400">
            {country}
          </Text>
        </Flex>
        <Img src={flag} borderRadius="50%" w={30} h={30} alt={country} />
      </Flex>
    </Flex>
  );
}
