import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="16rem"
    >
      Dashgo
      <Text as="span" ml="0.25" color="pink.500">.</Text>
    </Text>
  );
}