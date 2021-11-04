import { Flex, Icon, Heading } from "@chakra-ui/react";
import { MdOutlineDraw, MdOutlineEngineering } from "react-icons/md";
import { GiCube } from "react-icons/gi";
import { BsPrinter } from "react-icons/bs";
import { AiOutlinePlayCircle, AiOutlineCamera } from "react-icons/ai";

function ServiceShort(props) {
  const icons = [
    MdOutlineDraw,
    GiCube,
    BsPrinter,
    AiOutlinePlayCircle,
    AiOutlineCamera,
    MdOutlineEngineering,
  ];

  return (
    <Flex alignItems="center" pt={5} pb={5}>
      <Icon as={icons[props.order]} h="45px" w="45px" mr={3} />
      <Heading size="md">{props.text}</Heading>
    </Flex>
  );
}

export default ServiceShort;
