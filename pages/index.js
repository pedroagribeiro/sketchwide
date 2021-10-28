import { Flex, Center, Image } from "@chakra-ui/react";
import Logo from "../components/logo";
import Navbar from "../components/navbar";
import ShortService from "../components/service_short";

function Home() {
  const navbar_items = [
    {
      text: "ABOUT US",
      href: "/about-us",
    },
    {
      text: "SERVICES",
      href: "/services",
    },
    {
      text: "PROJECTS",
      href: "/projects",
    },
    {
      text: "CONTACTS",
      href: "/contacts",
    },
  ];

  const short_services = {
    left_hand_side: [
      {
        icon: "/service_1.png",
        text: "2D DRAWINGS",
      },
      {
        icon: "/service_2.png",
        text: "3D MODELING",
      },
      {
        icon: "/service_3.png",
        text: "3D PRINTING",
      },
    ],
    right_hand_side: [
      {
        icon: "/service_4.png",
        text: "3D PRODUCT ANIMATIONS",
      },
      {
        icon: "/service_5.png",
        text: "PHOTO REALISTIC RENDERING",
      },
      {
        icon: "/service_6.png",
        text: "ENGINEERING SIMULATIONS",
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
