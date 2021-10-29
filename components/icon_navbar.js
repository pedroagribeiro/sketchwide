import styles from "../styles/Navbar.module.css";
import { Flex, Link, Image } from "@chakra-ui/react";

function IconNavbar(props) {
  const company_logo = "/logo_plain.png";

  return (
    <Flex
      background="teal.300"
      alignItems="center"
      justifyContent="space-between"
      height="10vh"
      rounded={10}
      m={props.margin}
    >
      <Image src={company_logo} height="70%" pl={40} />
      <Flex pr={40}>
        {props.items.map((item) => (
          <Link key={item.href} href={item.href} pr={10} pl={10}>
            <a className={styles.item}>{item.text}</a>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default IconNavbar;
