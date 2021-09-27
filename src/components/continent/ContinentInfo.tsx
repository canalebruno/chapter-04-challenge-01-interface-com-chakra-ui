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
    <SimpleGrid
      mx={['4', null, '24']}
      my={['6', '20']}
      px={['', '10']}
      gap={['4', '10', '']}
      minChildWidth="300px"
      flex="1"
    >
      <Text fontSize={['md', 'lg', '2xl']} textAlign="justify">
        {children}
      </Text>
      <HStack justifySelf={['center', null, 'flex-end']} spacing="10">
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
