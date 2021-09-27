import { Box, Flex, Icon, Text, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

interface InfoNumbersProps {
  value: number;
  title: string;
  useTooltip?: boolean;
  tooltipLabel?: string;
}

export function InfoNumbers({
  value,
  title,
  useTooltip = false,
  tooltipLabel,
}: InfoNumbersProps) {
  return (
    <Flex direction="column" align={['flex-start', 'center']} justify="center">
      <Text
        fontSize={['3xl', '5xl']}
        color="#FFBA08"
        fontWeight="semibold"
        lineHeight="10"
      >
        {value}
      </Text>
      <Text fontSize={['lg', '2xl']} fontWeight={['regular', 'semibold']}>
        {title}
        {useTooltip && (
          <Box ml="1" display="inline">
            <Tooltip label={tooltipLabel} hasArrow>
              <span>
                <Icon as={FiInfo} w="1rem" h="1rem" color="gray.400" />
              </span>
            </Tooltip>
          </Box>
        )}
      </Text>
    </Flex>
  );
}
