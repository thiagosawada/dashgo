import NextLink from "next/link";
import { GetServerSideProps } from "next";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

export default function UserList({ users }) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(page, {
    initialData: users,
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    // Usa os mesmos parâmetros do useQuery
    await queryClient.prefetchQuery(["users", userId], async () => {
      const response = await api.get(`users/${userId}`);
      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutes
    })
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="1.5rem" mx="auto" maxW={1480} px="1.5rem" >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="2rem">
          <Flex mb="2rem" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && (
                <Spinner sie="sm" color="gray.500" ml="1rem"/>
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20}/>}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["1rem", "1rem", "1.5rem"]} color="gray.300" w="2rem">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    {isWideVersion && <Th w="2rem"></Th>}
                  </Tr>
                </Thead>

                <Tbody>
                  {data.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={["1rem", "1rem", "1.5rem"]}>
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Link
                            color="purple.400"
                            onMouseEnter={() => handlePrefetchUser(user.id)}
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                      {isWideVersion && (
                        <Td>
                          <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                          >
                            Editar
                          </Button>
                        </Td>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

// Comentado porque o miragejs não dá suporte para o servidor Next
// export const getServerSideProps: GetServerSideProps = async () => {
//   const { users } = await getUsers(1);

//   return {
//     props: {
//       users,
//     }
//   }
// }