import styles from "../styles/ShortService.module.css";
import { Flex, Image } from "@chakra-ui/react";

function ServiceShort(props) {
  return (
    <Flex alignItems="center" pt={5} pb={5}>
      <Image src={props.icon} height="45px" width="45px" mr={3} />
      <p className={styles.service_text}>{props.text}</p>
    </Flex>
  );
}

export default ServiceShort;
