import {
  Card,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Input,
  Button,
  Tag,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { GrMail } from "react-icons/gr";
import { BsFillChatFill } from "react-icons/bs";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import InfoCard from "../../Dashboard/components/InfoCard";

const SupportCard = () => {
  return (

      <Grid
      gap={6}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
        }}
      >

        <GridItem colSpan={1}>
        <Stack>
          <Icon fontSize={"2rem"} color={"p.purple"} as={GrMail}></Icon>
          <Text fontWeight={"semibold"} as={"h2"} textStyle="h2">
            Contact Us{" "}
          </Text>
          <Text fontSize={"sm"} color={"gray.500"} textStyle="h6">
            Have a question or just want to know more? Feel free to reach out to
            us.
          </Text>
        </Stack>
        </GridItem>
        
<GridItem colSpan={1}>
<Card p="6" borderRadius="xl">
          <Text fontWeight={"Bold"} fontSize={"14px"}>
            You will receive response within 24 hours of time of submit.
          </Text>

          <Stack my={4} gap={"15px"}>
            <HStack>
              <FormControl>
                <FormLabel fontWeight={"semibold"} fontSize={"12px"}>
                  Name
                </FormLabel>
                <Input placeholder="Enter Your Name" />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={"semibold"} fontSize={"12px"}>
                  Surname
                </FormLabel>
                <Input placeholder="Enter Your Surname" />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel fontWeight={"semibold"} fontSize={"12px"}>
                Email
              </FormLabel>
              <Input placeholder="Enter Your Email" />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight={"semibold"} fontSize={"12px"}>
                Message
              </FormLabel>
              <Input h={"86px"} placeholder="Your Message" />
            </FormControl>

            <Checkbox isInvalid>I agree with Terms & Conditions.</Checkbox>
          </Stack>

          <Stack mt={"auto"}>
            <Button color={"white"} bg={"gray.400"}>
              Send a Message
            </Button>
            <Button color={"black.200"} bg={"gray.100"}>
              Book a Meeting
            </Button>
          </Stack>
        </Card>
</GridItem>
        

        <GridItem colSpan={1}>
          <Card shadow={"none"} bg={"transparent"}>
            <Stack>
              <Icon color={"p.purple"} fontSize={"24px"} as={BsFillChatFill}></Icon>
              <Text fontSize={"32px"} fontWeight={"semibold"}>Live Chat</Text>
              <Text fontSize={"14px"} fontWeight={"medium"}>
                Don’t have time to wait for the answer? Chat with us now.
              </Text>
            </Stack>
          </Card>
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            imgurl="/purple.svg"
            text="Chat with us now"
            tagtext="Chatbot"
            inverted={true}
          />
        </GridItem>
      </Grid>
  );
};
export default SupportCard;
