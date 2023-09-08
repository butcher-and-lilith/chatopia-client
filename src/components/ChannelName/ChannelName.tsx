import { Box, HStack, Text } from "@chakra-ui/react";

import { getFirstTwoInitials } from "@/utils/string/get-first-two-initials";

interface ChannelNameProps {
  name: string;
}

export default function ChannelName({ name }: ChannelNameProps) {
  return (
    <Box
      border="transparent"
      borderRadius="5px"
      p="8px 9px"
      _hover={{
        bg: "main.gray",
      }}
      w="100%"
      cursor="pointer"
      transition="transform 100ms"
      _active={{ transform: "scale(0.95)" }}
    >
      <HStack spacing="12px" fontSize="18px" userSelect="none">
        <Text
          p="8px 9px"
          border="none"
          borderRadius="8px"
          bg="main.gray"
          fontWeight={600}
          w="42px"
          h="42px"
          textAlign="center"
          color="main.textGray"
        >
          {getFirstTwoInitials(name)}
        </Text>
        <Text color="main.textGrayLight" fontWeight={700} noOfLines={1}>
          {name}
        </Text>
      </HStack>
    </Box>
  );
}
