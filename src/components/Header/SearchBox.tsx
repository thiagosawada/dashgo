import { Flex, Input, Icon } from '@chakra-ui/react';
import { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <Flex
      as="label"
      flex={1}
      py="1rem"
      px="2rem"
      ml="1.5rem"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      pos="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        px="1rem"
        mr="1rem"
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize={20} />
    </Flex>
  );
}