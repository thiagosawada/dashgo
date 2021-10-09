import Link from "next/link";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="1.5rem" mx="auto" maxW={1480} px="1.5rem" >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["1.5rem", "2rem"]}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="1.5rem" borderColor="gray.700" />

          <VStack spacing="2rem">
            <SimpleGrid minChildWidth="240px" spacing={["1.5rem", "2rem"]} w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" label="Email" type="email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["1.5rem", "2rem"]} w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="password_confirmation"
                label="Confirmação de senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="2rem" justify="flex-end">
            <HStack spacing="1rem">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}