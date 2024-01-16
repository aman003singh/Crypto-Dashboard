import React from "react";
import {
  Container,
  Flex,
  Heading,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  Center,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";

import { FaUserTie } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const TopNav = ({title ,onOpen }) => {
  return (
    <Box px="4" bg="white" >
      <HStack
        maxWidth="65rem"
        height="64px"
        justify="space-between"
        mx="auto"
        
      >
        <Icon as={FaBars} onClick={onOpen}display={{base:"block" , lg:"none"}} />
        <Heading fontSize="28px" fontWeight="semibold">
         {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon fontSize="24px" as={FaUserTie} />
          </MenuButton>
          <MenuList>
            <MenuItem>Log Out</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem color="red.500">Delete Account</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
