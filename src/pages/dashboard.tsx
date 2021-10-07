import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";

// Carregar um componente de uma forma dinâmica. Por exemplo, quando um usuário clicar
const Chart = dynamic(() => import("react-apexcharts"), {
  // Para carregar o gráfico na camada do navegador
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-10-07T00:00:00.000Z',
      '2021-10-08T00:00:00.000Z',
      '2021-10-09T00:00:00.000Z',
      '2021-10-10T00:00:00.000Z',
      '2021-10-11T00:00:00.000Z',
      '2021-10-12T00:00:00.000Z',
      '2021-10-13T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

// Tipos de dados diferentes
const series = [
  { name: "Inscritos", data: [54, 10, 143, 29, 42, 88, 200] }
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="1.5rem" mx="auto" maxW={1480} px="1.5rem" >
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="1rem"
          // Se a div ficar com menos de 320 de largura, ela quebra de linha
          minChildWidth="320px"
          align="flex-start"
        >
          <Box
            p="2rem"
            bg="gray.800"
            borderRadius={8}
            pb="1rem"
          >
            <Text fontSize="lg" mb="1rem">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p="2rem"
            bg="gray.800"
            borderRadius={8}
            pb="1rem"
          >
            <Text fontSize="lg" mb="1rem">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}