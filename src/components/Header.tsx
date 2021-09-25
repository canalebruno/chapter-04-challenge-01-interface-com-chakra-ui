import { Box, Icon, IconButton, Image, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
  const { asPath, back } = useRouter();

  return (
    <SimpleGrid
      templateColumns="1fr 1fr 1fr"
      as="header"
      w="100vw"
      maxW={1440}
      py="7"
      px="24"
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
          ml="10"
        />
      )}

      <Image src="logo.svg" justifySelf="center" />
    </SimpleGrid>
  );
}
