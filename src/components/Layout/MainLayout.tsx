"use client";

import React from "react";
import Image from "next/image";
import { AddIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";

import { getFirstTwoInitials } from "@/utils/string/get-first-two-initials";
import { HEADER_PADDING } from "@/theme/constants";

import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Grid templateColumns="330px 1fr" h="100vh" w="100%">
      <Sidebar />
      <GridItem bg="main.gray" w="100%">
        {children}
      </GridItem>
    </Grid>
  );
}
