import { Flex, Img, Text } from '@chakra-ui/react';

interface IconToDoProps {
  icon: string;
  title: string;
}

export function IconToDo({ icon, title }: IconToDoProps) {
  return (
    <Flex direction="column" align="center" justify="space-around">
      <Img src={icon} h="5.3rem" mb="6" />
      <Text fontSize="2xl" fontWeight="semibold">
        {title}
      </Text>
    </Flex>
  );
}
