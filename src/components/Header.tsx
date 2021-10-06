import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiSearchLine, RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="5rem"
      mx="auto"
      mt="1rem"
      px="1.5rem"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="16rem">
        Dashgo
        <Text as="span" ml="0.25" color="pink.500">.</Text>
      </Text>

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
        />

        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="2rem"
          mx="2rem"
          pr="2rem"
          py="1rem"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>

        <Flex align="center">
          <Box mr="1rem" textAlign="right">
            <Text>Thiago Sawada</Text>
            <Text color="gray.300" fontSize="small">
              tms1_tms2@hotmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Thiago Sawada" src="https://github.com/thiagosawada.png" />
        </Flex>
      </Flex>
    </Flex>
  );
}