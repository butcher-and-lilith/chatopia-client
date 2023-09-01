"use client";

import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Grid templateColumns="300px 1fr" h="100vh" w="100%">
      <Sidebar>test</Sidebar>
      <GridItem bg="main.gray">{children}</GridItem>
    </Grid>
  );
}
