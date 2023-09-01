import { ReactNode } from "react";
import { GridItem } from "@chakra-ui/react";

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <GridItem h="100%" bg="main.black" color="main.white">
      {children}
    </GridItem>
  );
}
