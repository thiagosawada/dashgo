import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    // Para simular o loading
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="1rem">
          <Input
            type="email"
            label="Email"
            name="email"
            {...register("email")}
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="1.5rem"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
