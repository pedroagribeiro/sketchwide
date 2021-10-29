import { Flex, Center, Heading, Text, Image } from "@chakra-ui/react";
import IconNavbar from "../components/icon_navbar";
import Avatar from "../components/avatar";

function AboutUs() {
  const routing_items = [
    {
      href: "/",
      text: "HOME",
    },
    {
      href: "/services",
      text: "SERVICES",
    },
    {
      href: "/projects",
      text: "PROJECTS",
    },
    {
      href: "/contacts",
      text: "CONTACTS",
    },
  ];

  const team_members = [
    {
      name: "Marcelo Costa",
      photo: "/marcelo.jpg",
      twitter: "",
      linkedin: "",
    },
    {
      name: "José Faria",
      photo: "/marcelo.jpg",
      twitter: "",
      linkedin: "",
    },
    {
      name: "Nuno Farinha",
      photo: "/marcelo.jpg",
      twitter: "",
      linkedin: "",
    },
    {
      name: "João Costa",
      photo: "/marcelo.jpg",
      twitter: "",
      linkedin: "",
    },
  ];

  return (
    <Flex direction="column">
      <IconNavbar items={routing_items} margin={1} />
      <Center>
        <Heading mt="60px">ABOUT US</Heading>
      </Center>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mr="300px"
        ml="300px"
        mt="60px"
      >
        <Image src="/brainstorm.png" maxHeight="24vh" />
        <Text fontSize="2xl" maxWidth="60%">
          We are a team of professional mechanical engineers with 4 years of
          experience in: industrial 3D modeling, product design, HVAC design,
          photo realistic rendering and customized animations. In short, we
          offer a full-fledged package of 3D world. We try to be as realistic as
          possible and to bring your idea to implementable designs.
        </Text>
      </Flex>
      <Center>
        <Heading mt="60px">WHO WE ARE</Heading>
      </Center>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mr="200px"
        ml="200px"
        mt="50px"
      >
        {team_members.map((member) => (
          <Avatar
            image={member.photo}
            name={member.name}
            twitter={member.twitter}
            linkedin={member.linkedin}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default AboutUs;
