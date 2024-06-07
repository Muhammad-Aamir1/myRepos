import {
  
  Card,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { LiaDownloadSolid } from "react-icons/lia";
import { GrSearch } from "react-icons/gr";
import TableData from "./TableData";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];
  return (
    <>
      <DashboardLayout>
        <Flex justify="end">
          <Button leftIcon={<Icon as={LiaDownloadSolid} />}>Export CSV</Button>
        </Flex>
        <Card p="4" borderRadius="1rem" mt="12px" >
          <Tabs  >
            <TabList display="flex"  justifyContent="space-between" alignItems="start">
              <Flex>
                {tabs.map((tb) => (
                  <Tab key={tb.count} color="gray" display="flex" gap={3}>
                    {tb.name}{" "}
                    <Tag colorScheme="gray" borderRadius="full">
                      {tb.count}
                    </Tag>
                  </Tab>
                ))}
              </Flex>
              <HStack  position="relative">
                <Icon
                  color="gray"
                  fontSize="13px"
                  fontWeight="400"
                  as={GrSearch}
                  position="absolute"
                  left="7px"
                />
                <Input
                  px="24px"
                  fontWeight="400"
                  color="gray"
                  h="25px"
                  type="text"
                  placeholder="Search by ID or destination"
                  outline="0"
                  border="0"
                />
              </HStack>
            </TabList>

            <TabPanels>
              <TabPanel>
                <TableData />
              </TabPanel>
              <TabPanel>
                <TableData />
              </TabPanel>
              <TabPanel>
                <TableData />
              </TabPanel>
              <TabPanel>
                <TableData />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </DashboardLayout>
    </>
  );
};

export default Transaction;
