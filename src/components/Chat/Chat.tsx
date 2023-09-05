import { ReactNode } from "react";
import { HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

interface ChatProps {
  name: string;
  sentDate: string;
  imageUrl: string;
  children: ReactNode;
}

export default function Chat({
  name,
  sentDate,
  imageUrl,
  children,
}: ChatProps) {
  return (
    <HStack spacing="28px" alignItems="flex-start">
      <Image
        src={imageUrl}
        alt="Profile Picture"
        width={42}
        height={42}
        style={{ borderRadius: "7px" }}
      />
      <VStack alignItems="flex-start" spacing="4px">
        <Text
          fontSize="18px"
          fontWeight={700}
          color="main.textGrayName"
          letterSpacing="-0.6px"
        >
          {name}{" "}
          <Text
            as="span"
            fontSize="14px"
            fontWeight={500}
            ml="10px"
            letterSpacing="-0.5px"
          >
            {sentDate}
          </Text>
        </Text>
        <Text color="main.textGray">{children}</Text>
      </VStack>
    </HStack>
  );
}
