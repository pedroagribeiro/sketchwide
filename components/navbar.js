import { Flex, Button, Link, Heading } from "@chakra-ui/react";

function Navbar(props) {
  return (
    <Flex
      background="teal.500"
      alignItems="center"
      justifyContent="space-around"
      height="10vh"
      width={props.width}
      rounded={6}
      opacity="80%"
    >
      {props.items.map((item) => (
        <Button key={item.href} colorScheme="teal">
          <Heading size="md">
            <Link href={item.href}>{item.text}</Link>
          </Heading>
        </Button>
      ))}
    </Flex>
  );
}

export default Navbar;
