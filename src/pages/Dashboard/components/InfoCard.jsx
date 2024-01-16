import React from "react";
import { Card, Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgurl, text, tagtext, inverted }) => {
  return (
    <Card
      bg={inverted ? "p.purple" : "white"}
      p="6"
      borderRadius="xl"
      bgImage={imgurl}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      
  
     
    >
      <Tag
        borderRadius={"full"}
        maxW={"55px"}
        justifyContent={"center"}
        fontSize={"12px"}
        fontWeight={"semibold"}
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
       
      >
        {tagtext}
      </Tag>

      <Text mt={4} fontWeight={"medium"} textStyle={"h5"}
       color={inverted ? "white" : "p.purple"}>
        {text}
      </Text>
    </Card>
  );
};

export default InfoCard;
