import {
  Icon,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  Heading,
  HStack,
  Box,
} from "@chakra-ui/react";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack justify="space-between" maxW="70rem" mx="auto" h="16">
        <Icon as={LuMenu} onClick={onOpen} fontSize="27px" display={{
            lg:"none",
            base:"block"
        }}/>
        <Heading fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize="29px" as={FaRegCircleUser} />
          </MenuButton>
          <MenuList>
            <MenuItem>Support</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
