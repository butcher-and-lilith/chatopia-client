import { AbsoluteCenter, Box, Text, Divider } from "@chakra-ui/react";

export default function CustomDivider() {
  return (
    <Box position="relative" padding="10px" color="main.textGrayName" w="100%">
      <Divider />
      <AbsoluteCenter px="22px" bg="main.gray">
        <Text fontSize="12px">August 3, 2020</Text>
      </AbsoluteCenter>
    </Box>
  );
}
