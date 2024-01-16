import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransactionTable = () => {
  //   const heads = [
  //     { topic: "ID" },
  //     { topic: "Date & Time" },
  //     { topic: "Type" },
  //     { topic: "Amount" },
  //     { topic: "Status" },
  //   ];

  const tableData = [
    {
      ID: "HD82NA2H",

      date: "2022-06-09",
      time: "07:06 PM",

      type: {
        name: "INR Deposit",
        tag: "Wire Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Pending",
    },
    {
      ID: "HD82NA2H",

      date: "2022-06-09",
      time: "07:06 PM",

      type: {
        name: "INR Deposit",
        tag: "Wire Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Processing",
    },
    {
      ID: "HD82NA2H",

      date: "2022-06-09",
      time: "07:06 PM",

      type: {
        name: "INR Deposit",
        tag: "Wire Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Canceled",
    },
    {
      ID: "HD82NA2H",

      date: "2022-06-09",
      time: "07:06 PM",

      type: {
        name: "INR Deposit",
        tag: "Wire Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "#5A5959",
    Processing: "#F5A50B",
    Completed: "#059669",
    Canceled: "#DC2626",
  };
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        {/* <TableCaption>Not Official Data</TableCaption> */}
        <Thead>
          {/* {heads.map((head) => (
              <Tr>
                <Th>{head.topic}</Th>
              </Tr>
            ))} */}

          <Tr>
            <Th color={"gray.400"}>ID</Th>
            <Th color={"gray.400"}>Date & Time</Th>
            <Th color={"gray.400"}>Type</Th>
            <Th color={"gray.400"}>Amount</Th>
            <Th color={"gray.400"}>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontWeight={"semibold"}>{data.ID}</Td>
              <Td>
                <Stack>
                  <Text fontWeight={"semibold"}>{data.date}</Text>
                  <Text
                    color={"gray.500"}
                    fontSize={"12px"}
                    fontWeight={"normal"}
                  >
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack>
                  <Text fontWeight={"semibold"}>{data.type.name}</Text>
                  <Text
                    color={"gray.500"}
                    fontSize={"12px"}
                    fontWeight={"normal"}
                  >
                    {data.type.tag}
                  </Text>
                </Stack>
              </Td>
              <Td fontWeight={"semibold"}>{data.amount}</Td>
              <Td>
                <Tag borderRadius={"full"} fontWeight={"bold"} color={"white"} bg={statusColor[data.status]}>{data.status}</Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
