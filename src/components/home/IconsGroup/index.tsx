import { Flex, SimpleGrid } from '@chakra-ui/react';
import { IconToDo } from './IconToDo';

export function IconsGroup() {
  return (
    <SimpleGrid
      templateColumns="repeat(5,1fr)"
      mt="28"
      mx="auto"
      px="10"
      maxW={1240}
      w="100%"
      justify="space-between"
    >
      <IconToDo icon="cocktail.svg" title="vida noturna" />
      <IconToDo icon="surf.svg" title="praia" />
      <IconToDo icon="building.svg" title="moderno" />
      <IconToDo icon="museum.svg" title="clássico" />
      <IconToDo icon="earth.svg" title="e mais..." />
    </SimpleGrid>
  );
}
