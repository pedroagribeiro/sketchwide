import { Flex, Image } from "@chakra-ui/react";

function Logo(props) {
  return (
    <Flex
      mt={props.mt}
      mb={props.mb}
      maxWidth={props.max_width}
      maxHeight={props.max_height}
    >
      <Image src="/logo_text.png" alt="sketchwide" />
    </Flex>
  );
}

export default Logo;
