import { Image, Flex, Text, Icon } from "@chakra-ui/react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

function Avatar(props) {
  return (
    <Flex alignItems="center" direction="column">
      <Image src={props.image} borderRadius="full" />
      <Text fontSize="xl">{props.name}</Text>
      <Flex>
        <Icon as={BsTwitter} mr="10px">
          <a href={props.twitter}></a>
        </Icon>
        <Icon as={BsLinkedin} ml="10px">
          <a href={props.linkedin}></a>
        </Icon>
      </Flex>
    </Flex>
  );
}

export default Avatar;
