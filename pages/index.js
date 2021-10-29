import { Flex, Center, Image } from "@chakra-ui/react";
import Logo from "../components/logo";
import Navbar from "../components/navbar";
import ShortService from "../components/service_short";

function Home() {
  const navbar_items = [
    {
      text: "About us",
      href: "/about-us",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Contacts",
      href: "/contacts",
    },
  ];

  const short_services = {
    left_hand_side: [
      {
        icon: "/service_1.png",
        text: "2D drawings",
      },
      {
        icon: "/service_2.png",
        text: "3D modeling",
      },
      {
        icon: "/service_3.png",
        text: "3D printing",
      },
    ],
    right_hand_side: [
      {
        icon: "/service_4.png",
        text: "3D product animations",
      },
      {
        icon: "/service_5.png",
        text: "Photo realistic rendering",
      },
      {
        icon: "/service_6.png",
        text: "Engineering simulations",
      },
    ],
  };

  return (
    <Flex direction="column">
      <Center>
        <Logo mt="3%" mb="3%" max_width="45%" />
      </Center>
      <Center>
        <Navbar items={navbar_items} opacity="0.70" />
      </Center>
      <Center mt={20} justifyContent="center">
        <Flex direction="column" mr={50}>
          {short_services.left_hand_side.map((service) => (
            <ShortService
              key={service.text}
              icon={service.icon}
              text={service.text}
            />
          ))}
        </Flex>
        <Flex direction="column" ml={50}>
          {short_services.right_hand_side.map((service) => (
            <ShortService
              key={service.text}
              icon={service.icon}
              text={service.text}
            />
          ))}
        </Flex>
      </Center>
    </Flex>
  );
}

export default Home;
