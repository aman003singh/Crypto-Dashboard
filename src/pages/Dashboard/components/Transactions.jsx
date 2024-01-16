import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Grid,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiCurrencyRupee } from "react-icons/hi";
import { LiaBtc } from "react-icons/lia";
import React from "react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: LiaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <Card h="full" p="6" borderRadius="xl">
      <Text fontSize="16" fontWeight={"medium"} color="black.80">
        Recent Transactions
      </Text>

      <Stack mt={5}>
        {transactions.map((transactions) => (
          <Flex my={2} gap={"5"} key={transactions.id} width={"full"}>
            <Grid
              placeItems={"center"}
              bg="black.5"
              boxSize={10}
              borderRadius={"full"}
            >
              <Icon as={transactions.icon}></Icon>
            </Grid>

            <Flex justify="space-between" w={"full"}>
              
                <Stack>
                  <Text fontSize={"16px"}> {transactions.text}</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    {transactions.timestamp}
                  </Text>
                </Stack>

                <Text fontSize={"16px"} fontWeight={"medium"}>
                  {transactions.amount}
                </Text>
              
            </Flex>
           
          </Flex>
        ))}
      </Stack>

      <Button colorScheme="gray" mt={15} >View All</Button>
    </Card>
  );
};

export default Transactions;
