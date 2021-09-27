import {
  Box,
  Flex,
  HStack,
  Icon,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/home/Banner';
import { IconsGroup } from '../components/home/IconsGroup';
import Slider from '../components/home/Slider';
import { BsCircleFill } from 'react-icons/bs';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {isWideVersion ? (
        <IconsGroup />
      ) : (
        <Flex direction="column" w="100vw" maxW="400px" px="12" my="9">
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="medium">
              <Icon as={BsCircleFill} color="#FFBA08" w="2" mr="2" />
              vida noturna
            </Text>
            <Text fontSize="lg" fontWeight="medium">
              <Icon as={BsCircleFill} color="#FFBA08" w="2" mr="2" />
              praia
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="medium">
              <Icon as={BsCircleFill} color="#FFBA08" w="2" mr="2" />
              moderno
            </Text>
            <Text fontSize="lg" fontWeight="medium">
              <Icon as={BsCircleFill} color="#FFBA08" w="2" mr="2" />
              clássico
            </Text>
          </Flex>
          <Flex justify="center">
            <Text fontSize="lg" fontWeight="medium">
              <Icon as={BsCircleFill} color="#FFBA08" w="2" mr="2" />e mais...
            </Text>
          </Flex>
        </Flex>
      )}
      <Box mt={['0', null, '20']} mb="14" w="5.625rem" h="2px" bg="gray.500" />
      <Text
        fontSize={['2xl', '4xl']}
        fontWeight="medium"
        align="center"
        mb="14"
      >
        Vamos nessa?
        <br />
        Então escolha o seu continente
      </Text>
      <Slider />
    </Flex>
  );
}
