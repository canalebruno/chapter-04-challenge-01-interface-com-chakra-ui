import { Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { InfoNumbers } from './InfoNumbers';

interface ContinentInfoProps {
  countries: number;
  languages: number;
  cities: number;
  children: ReactNode;
}

export function ContinentInfo({
  countries,
  languages,
  cities,
  children,
}: ContinentInfoProps) {
  return (
    <SimpleGrid templateColumns="1fr 1fr" mx="24" my="20" px="10">
      <Text fontSize="2xl" textAlign="justify">
        {children}
      </Text>
      <HStack justifySelf="flex-end" spacing="10">
        <InfoNumbers title="países" value={countries} />
        <InfoNumbers title="línguas" value={languages} />
        <InfoNumbers
          title="cidades +100"
          value={cities}
          useTooltip
          tooltipLabel="Lisboa"
        />
      </HStack>
    </SimpleGrid>
  );
}
