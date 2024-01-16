import {
  Card,
  HStack,
  Text,
  Stack,
  Tag,
  Icon,
  Button,
  Flex,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:15 PM", "8:30 PM", "9:05 PM"];

  return (
 <Card p="6" borderRadius="xl">
      <Stack
        justify="space-between"
        bg="white"
        spacing={16}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack
            color="black.80"
            pt={{
              base: "4",
              lg: "0",
            }}
          >
            <Text fontSize="smx" color="grey">
              Current Price
            </Text>
          </HStack>

          <HStack
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            spacing={8}
          >
            <HStack>
              <HStack>
                <Text fontWeight={"semibold"} textStyle="h2">
                  ₹26,670.25
                </Text>

                <Text
                  fontWeight={"semibold"}
                  fontSize={"14px"}
                  textColor={"green.500"}
                >
                  <Icon as={FiArrowUpRight}></Icon>
                  0.04%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button>
            <Icon mr={2} as={IoMdAddCircle}></Icon>
            <Text>Buy</Text>
          </Button>

          <Button>
            <Icon mr={2} as={AiFillMinusCircle}></Icon>
            <Text>Sell</Text>
          </Button>
        </HStack>
      </Stack>

      <Tabs variant="soft-rounded" colorScheme="purple">
        <Flex justify={"end"}  >
          <TabList bg="black.5" p={"3px"} >
            {
            ["1H" , "1D" , "1W" , "1M"].map((tab) => [
                <Tab key={tab} fontSize={"sm"} p={"6px"} borderRadius={"4"} >
                    {tab}
                </Tab>
            ])
          }
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Stack>
              <Image mt={"48px"} src="/graph.svg" />
              <HStack justify={"space-between"}>
                {timestamps.map((timestamp) => (
                  <Text key={timestamp} fontSize={"sm"} color="black.80">
                    {timestamp}
                  </Text>
                ))}
              </HStack>
            </Stack>
          </TabPanel>
          <TabPanel>
            <p>Nothing Here Yet -</p>
          </TabPanel>
          <TabPanel>
            <p>Nothing Here Yet - -</p>
          </TabPanel>
          <TabPanel>
            <p>Nothing Here Yet - - -</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>

   
  );
};

export default PriceSection;
