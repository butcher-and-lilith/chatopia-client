import React from "react";
import { AtSignIcon, InfoIcon } from "@chakra-ui/icons";
import { Button, StackProps, VStack } from "@chakra-ui/react";

interface MenuProps extends StackProps {}

const Menu = (
  { ...restProps }: MenuProps,
  ref: React.ForwardedRef<HTMLDivElement | undefined>
) => {
  return (
    <VStack
      bg="main.gray"
      p="15px"
      borderRadius="12px"
      position="absolute"
      bottom="65px"
      right="20px"
      align="flex-start"
      w="193px"
      ref={ref}
      {...restProps}
    >
      <Button
        leftIcon={<InfoIcon fontSize="20px" mr="10px" />}
        variant="solid"
        color="main.textGray"
        bg="main.gray"
        w="full"
        textAlign="left"
        fontSize="14px"
        fontWeight={500}
        justifyContent="flex-start"
        _hover={{ bg: "main.input" }}
        transition="all 100ms"
        _active={{ transform: "scale(0.9)" }}
      >
        Profile
      </Button>
      <Button
        leftIcon={<AtSignIcon fontSize="20px" mr="10px" />}
        variant="solid"
        color="main.textGray"
        bg="main.gray"
        w="full"
        fontSize="14px"
        fontWeight={500}
        justifyContent="flex-start"
        _hover={{ bg: "main.input" }}
        transition="all 100ms"
        _active={{ transform: "scale(0.9)" }}
      >
        Tweeter
      </Button>
    </VStack>
  );
};

export default React.forwardRef(Menu);
