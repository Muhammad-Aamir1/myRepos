import SideDrawer from "./SideDrawer";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { Box, Container, useDisclosure, Flex } from "@chakra-ui/react";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex>
        <Box
          display={{
            lg: "block",
            base: "none",
          }}
        >
          <Sidebar />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />

        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />
          <Container
            mt="6"
            maxW="70rem"
            px="4"
            overflowX="hidden"
            overflowY="auto"
            h="calc(100vh-88px)"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
