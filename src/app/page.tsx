"use client";

import Chat from "@/components/Chat/Chat";
import { HEADER_PADDING } from "@/theme/constants";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

import Divider from "@/components/Divider/Divider";

export default function Home() {
  const arr1 = new Array(3).fill(1);
  const arr2 = new Array(10).fill(1);

  return (
    <Box>
      <Heading
        noOfLines={1}
        color="main.textGray"
        as="h2"
        fontSize="18px"
        p={HEADER_PADDING}
        px="70px"
        lineHeight="32px"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      >
        FRONT-END DEVELOPERS
      </Heading>

      <Box w="100%" p="50px 76px 50px 70px">
        <VStack
          alignItems="flex-start"
          h="70vh"
          overflowX="hidden"
          overflowY="scroll"
          ml="5px"
          spacing="36px"
        >
          {arr1.map((_, idx) => (
            <Chat
              key={idx}
              name="Ari Juanda"
              sentDate="yesterday at 2:29 AM"
              imageUrl="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Loki"
            >
              Suspendisse enim tellus, elementum quis dictum sed, sodales at
              mauris 😀
            </Chat>
          ))}

          <Divider />

          {arr2.map((_, idx) => (
            <Chat
              key={idx}
              name="Ari Juanda"
              sentDate="yesterday at 2:29 AM"
              imageUrl="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Loki"
            >
              Suspendisse enim tellus, elementum quis dictum sed, sodales at
              mauris 😀
            </Chat>
          ))}
        </VStack>

        <InputGroup mt="60px" w="100%">
          <Input
            type="text"
            placeholder="Type a message here"
            h="52px"
            bg="main.input"
            border="none"
            color="main.white"
          />

          <InputRightElement>
            <IconButton
              bg="main.blue"
              color="main.white"
              aria-label="Add Channel"
              size="sm"
              top="5px"
              icon={<CheckIcon />}
              _hover={{ bg: "blue.600" }}
              transition="all 100ms"
              _active={{ transform: "scale(0.8)" }}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
}
