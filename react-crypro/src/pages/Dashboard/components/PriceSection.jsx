import { CustomCard } from "../../../chakra/CustomCard";
import {
  HStack,
  Stack,
  Button,
  Image,
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
} from "@chakra-ui/react";
import { CgArrowTopRight } from "react-icons/cg";
import { LuMinusCircle } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";

const PriceSection = () => {
  const timesStamp = ["1:15 AM", "3:45 AM", "4:15 AM", "1:35 AM", "8:15 PM"];
  return (
    <CustomCard h="full">
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="Black.80">
            <Text fontSize="14px"> Current Price</Text>
          </HStack>

          <HStack
            gap="32px"
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text fontWeight="500" fontSize="24px" lineHeight="28px">
                ₹26,670.25{" "}
              </Text>
              <HStack>
                <Icon color="green.500" as={CgArrowTopRight} />
                <Text color="green.500"> 0.04%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack  spacing="8px">
          <Button leftIcon={<Icon as={FiPlusCircle} />} w="107" h="38px">
            Buy
          </Button>
          <Button leftIcon={<Icon as={LuMinusCircle} />} w="107" h="38px">
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="#F3F3F7" p="4px" h="42px" borderRadius="8px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                borderRadius="8px"
                key={tab}
                _selected={{ bg: "#ffff", color: "#000" }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image mt="50px" w="100%" src="\public\images\graph.svg" />{" "}
          </TabPanel> <TabPanel>
 two
           </TabPanel>
          <TabPanel>
            <p>third</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <HStack justify="space-between">
        {timesStamp.map((item, index) => (
          <Text key={index} fontSize="sm" color="black.80">
            {" "}
            {item}{" "}
          </Text>
        ))}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
