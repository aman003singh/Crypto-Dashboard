import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdFileDownload } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
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
      <HStack align={{
      base:"flex-start"
      ,xl:"center"
    }} flexDir={{
      base:"column",
      xl:"row",
    }} spacing={{
      base:0,
      xl:"10"
    }}>
        <Stack>
          <HStack color="black.80" pt={{
            base:"4",
            lg:"0"
          }} >
            <Text fontSize="smx" color="grey">
              Total Portfolio Value
            </Text>
            <Icon as={AiOutlineInfoCircle}></Icon>
          </HStack>
          <Text fontWeight={"semibold"} textStyle="h2">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80" pt={{
            base:"4",
            lg:"0"
          }}  >
            <Text fontSize="smx" color="grey">
              Wallet Balances
            </Text>
          </HStack>

          <HStack align={{
      base:"flex-start"
      ,sm:"center"
    }} flexDir={{
      base:"column",
      sm:"row",
    }} spacing={8}>

            <HStack>
              <Text fontWeight={"semibold"} textStyle="h2">
                22.39401000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>

            <HStack>
              <Text fontWeight={"semibold"} textStyle="h2">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>

          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <HStack>
          <Button>
            <Icon mr={2} as={MdFileDownload}></Icon>
            <Text>Deposit</Text>
          </Button>
        </HStack>

        <HStack>
          <Button>
            <Icon mr={2} as={MdFileUpload}></Icon>
            <Text>Withdraw</Text>
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
