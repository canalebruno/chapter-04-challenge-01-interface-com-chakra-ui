import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Card } from '../components/continent/Card';
import { ContinentBanner } from '../components/continent/ContinentBanner';
import { ContinentInfo } from '../components/continent/ContinentInfo';
import { Header } from '../components/Header';

export default function Europe() {
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
      <ContinentBanner title="Europa" image="europe-banner.jpg" />
      <ContinentInfo countries={50} languages={60} cities={27}>
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </ContinentInfo>
      <Box w="100%" px="24">
        <Text mb="10" ml="10" fontWeight="medium" fontSize="4xl">
          Cidades +100
        </Text>
      </Box>
      <SimpleGrid mx="24" px="10" templateColumns="repeat(4,1fr)" gap="10">
        <Card
          image="london.jpg"
          city="Londres"
          country="Reino Unido"
          flag="gb.svg"
        />
        <Card image="paris.jpg" city="Paris" country="França" flag="fr.svg" />
        <Card image="rome.jpg" city="Roma" country="Itália" flag="it.svg" />
        <Card
          image="prague.jpg"
          city="Praga"
          country="República Tcheca"
          flag="cz.svg"
        />
        <Card
          image="amsterdam.jpg"
          city="Amsterdã"
          country="Holanda"
          flag="nl.svg"
        />
      </SimpleGrid>
    </Flex>
  );
}
