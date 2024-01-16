import React from "react";
import { Button, Card, Flex, Icon, Tag } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title={"Transactions"} >
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>

      <Card p="6" borderRadius="xl">
        <Tabs>
          <TabList pt={4} >
            {tabs.map((tab) => (
              <Tab key={tab.name} display={"flex"} gap={2} >
                {tab.name}
                <Tag colorScheme="gray" > {tab.count} </Tag>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
             <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
