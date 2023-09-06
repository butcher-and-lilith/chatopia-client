import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import {
  Box,
  GridItem,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { HEADER_PADDING } from "@/theme/constants";
import { getFirstTwoInitials } from "@/utils/string/get-first-two-initials";
import { AddIcon, SearchIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Image from "next/image";

import "./styles.css";
import Menu from "../Menu/Menu";

const DUMMY_CHANNELS = [
  {
    name: "FRONT-END DEVELOPER",
  },
  {
    name: "RANDOM",
  },
  {
    name: "BACK-END",
  },
  {
    name: "CATS AND DOGS",
  },
  {
    name: "WELCOME",
  },
];

export default function Sidebar() {
  const menuRef = useRef<HTMLDivElement>();

  const { isOpen, onToggle } = useDisclosure();

  return (
    <GridItem h="100%" bg="main.black" color="main.white">
      <VStack h="100%" justify="space-between">
        <VStack w="100%">
          <HStack
            w="100%"
            justify="space-between"
            p={HEADER_PADDING}
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          >
            <Text
              ml="8px"
              fontSize="18px"
              fontWeight="700"
              color="main.textGray"
            >
              Channels
            </Text>
            <IconButton
              bg="main.gray"
              color="main.white"
              _hover={{ bg: "main.blue" }}
              aria-label="Add Channel"
              size="sm"
              icon={<AddIcon />}
              transition="all 100ms"
              _active={{ transform: "scale(0.8)" }}
            />
          </HStack>

          <Box p="6px 14px 21px">
            <InputGroup mt="20px" alignItems="center">
              <InputLeftElement pointerEvents="none" h="100%">
                <SearchIcon color="main.white" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search"
                bg="main.input"
                border="none"
                h="48px"
              />
            </InputGroup>

            <VStack
              mt="35px"
              alignItems="flex-start"
              w="105%"
              maxH="70vh"
              overflowY="scroll"
              overflowX="hidden"
            >
              {DUMMY_CHANNELS.map((item, i) => (
                <Box
                  key={i}
                  border="transparent"
                  borderRadius="5px"
                  p="8px 9px"
                  _hover={{
                    bg: "main.gray",
                  }}
                  w="100%"
                  cursor="pointer"
                >
                  <HStack
                    spacing="12px"
                    fontSize="18px"
                    transition="all 100ms"
                    _active={{ transform: "scale(0.95)" }}
                    userSelect="none"
                  >
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
                      {getFirstTwoInitials(item.name)}
                    </Text>
                    <Text
                      color="main.textGrayLight"
                      fontWeight={700}
                      noOfLines={1}
                    >
                      {item.name}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>

        <HStack
          w="100%"
          justify="space-between"
          spacing="20px"
          p="14px 21px"
          position="relative"
        >
          <HStack spacing="25px">
            <Image
              src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Loki"
              alt="avatar"
              width={42}
              height={42}
              style={{ borderRadius: "7px" }}
            />
            <Text>Ari Juanda</Text>
          </HStack>
          <IconButton
            aria-label="Open Profile Settings"
            icon={<ChevronUpIcon fontSize="25px" />}
            bg="main.black"
            color="main.white"
            size="lg"
            _hover={{ bg: "main.gray" }}
            transition="all 100ms"
            _active={{ transform: "scale(0.8)" }}
            onClick={onToggle}
          />

          <CSSTransition
            classNames="menu"
            nodeRef={menuRef}
            in={isOpen}
            timeout={300}
            unmountOnExit
          >
            <Menu ref={menuRef} />
          </CSSTransition>
        </HStack>
      </VStack>
    </GridItem>
  );
}
