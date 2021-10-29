import styles from "../styles/Navbar.module.css";
import { Flex, Link } from "@chakra-ui/react";

function Navbar(props) {
  return (
    <Flex
      background="teal.300"
      alignItems="center"
      justifyContent="space-around"
      height="10vh"
      width={props.width}
      rounded={10}
    >
      {props.items.map((item) => (
        <Link key={item.href} href={item.href} className={styles.item}>
          <a className={styles.item}>{item.text}</a>
        </Link>
      ))}
    </Flex>
  );
}

export default Navbar;
