import { Stack, Heading, HStack, Icon, Text, Box } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsDoubleNeSw,
      text: "Transaction",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      justify="space-between"
      bg="white"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Heading
          textAlign="center"
          fontWeight="medium"
          fontSize="20px"
          as="h1"
          pt="56px"
        >
          React Crypto
        </Heading>
        <Box mt="6" mx="12px">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              {" "}
              <HStack
                borderRadius="10px"
                key={nav.text}
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} cursor="pointer" />
                <Text fontSize="14px" cursor="pointer" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="12px">
        <Link to="/Support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={RiCustomerServiceLine} cursor="pointer" />
            <Text fontSize="14px" cursor="pointer" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>{" "}
      </Box>
    </Stack>
  );
};

export default Sidebar;
