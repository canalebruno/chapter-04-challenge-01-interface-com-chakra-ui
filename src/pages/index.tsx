import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/home/Banner';
import { IconsGroup } from '../components/home/IconsGroup';
import Slider from '../components/home/Slider';

export default function Home() {
  return (
    <Flex
      direction="column"
      w="100vw"
      maxW={1440}
      mx="auto"
      align="center"
      pb="10"
    >
      <Header />
      <Banner />
      <IconsGroup />
      <Box mt="20" mb="14" w="5.625rem" h="2px" bg="gray.500" />
      <Text fontSize="4xl" fontWeight="medium" align="center" mb="14">
        Vamos nessa?
        <br />
        Então escolha o seu continente
      </Text>
      <Slider />
    </Flex>
  );
}
