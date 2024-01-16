import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <Flex>
        <Box display={{ base: "none", lg: "flex" }}>
          <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopNav onOpen={onOpen} title={title} />
          <Container overflowX={"hidden"} overflowY={"auto"} height={"calc(100vh-64px)"}  mt="6" maxW="65rem"  px="4">
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
