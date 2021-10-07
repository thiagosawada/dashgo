import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="1.5rem" mx="auto" maxW={1480} px="1.5rem" >
        <Sidebar />
      </Flex>
    </Flex>
  );
}