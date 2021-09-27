import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface CitiesGridProps {
  children: ReactElement | ReactElement[];
}

export function CitiesGrid({ children }: CitiesGridProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isWideVersion) {
    return (
      <SimpleGrid mx="24" px="10" templateColumns="repeat(4,1fr)" gap="10">
        {children}
      </SimpleGrid>
    );
  } else {
    return (
      <SimpleGrid px="14" minChildWidth="250px" w="100vw" gap="10">
        {children}
      </SimpleGrid>
    );
  }
}
