import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction="row"
      spacing="1.5rem"
      mt="2rem"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="0.5rem">
        <Button
          size="sm"
          fontSize="xs"
          width="1rem"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="1rem"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="1rem"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="1rem"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
      </Stack>
    </Stack>
  );
}