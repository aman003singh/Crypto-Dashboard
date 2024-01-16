import React from "react";
import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/Rx";
import { BsArrowDownUp } from "react-icons/Bs";
import { BiSupport } from "react-icons/Bi";
import {Link, useLocation} from "react-router-dom"

const Sidenav = () => {
  const location = useLocation();


  const isActiveLink = (link) => {
    return location.pathname == link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack justify="space-between" bg="white" boxShadow={{base:"none" ,
    lg:"lg"}} width={{base:"full" ,
    lg:"16rem"}} height="100vh"  >
      <Box>
        <Heading textAlign="center" mt="56px" as="h1" fontSize="20px">
          @Aman003Singh{" "}
        </Heading>

        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text} >
            <HStack
            
              borderRadius="10px"
              bg = {isActiveLink(nav.link) ? "#F3F3F7" :"transparent"}
              color = {isActiveLink(nav.link) ? "#171717" :"#797E82"}
              py="4"
              px="4"
              my={2}
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="semibold">
                {nav.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="4">
        <Link to="./Support" >
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          bg = {isActiveLink("/Support") ? "#F3F3F7" :"transparent"}
          color = {isActiveLink("/Support") ? "#171717" :"#797E82"}
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
         
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="semibold">
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
