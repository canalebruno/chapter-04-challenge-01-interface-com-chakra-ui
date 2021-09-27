import {
  Box,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
  const { asPath, back } = useRouter();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <SimpleGrid
      templateColumns="1fr 1fr 1fr"
      as="header"
      w="100vw"
      maxW={1440}
      py={['4', '4', '7']}
      px={['0', '0', '24']}
    >
      {asPath === '/' ? (
        <Box />
      ) : (
        <IconButton
          icon={<Icon as={IoIosArrowBack} />}
          aria-label="Last page"
          variant="unstyled"
          justifySelf="flex-start"
          onClick={() => {
            back();
          }}
          ml={['4', '10']}
        />
      )}

      <Image src="logo.svg" justifySelf="center" />
    </SimpleGrid>
  );
}
