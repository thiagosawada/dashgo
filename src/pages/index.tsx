import { Flex, Button, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="2rem"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="1rem">
          <Input type="email" label="Email" name="email"/>
          <Input type="password" label="Senha" name="password"/>
        </Stack>

        <Button
          type="submit"
          mt="1.5rem"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
