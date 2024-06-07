import { Flex, Grid, Icon, Stack, Text, Button, Divider } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { SiBitcoinsv } from "react-icons/si";
import { Fragment } from "react";
 
const Transactions = () => {
  const transaction = [
    {
      id: "1",
      icon: HiOutlineCurrencyRupee,
      text: "INR Deposit",
      time: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
    },
    {
      id: "2",
      icon: SiBitcoinsv,
      text: "BTC Sell",
      time: "2022-06-09 7:06 PM",
      amount: "- 12.48513391 BTC",
    },
    {
      id: "3",
      icon: HiOutlineCurrencyRupee,
      text: "INR Deposit",
      time: "2022-06-09 7:06 PM",
      amount: "+ ₹81,123.10",
    },
  ];
  return (
    <CustomCard>
      <Text fontSize="sm" mb="24px" color="black.80">
        Recents Transactions
      </Text>
      <Stack spacing="4">
        {transaction.map((trans,i) => (
          <Fragment key={trans.id}>
          {i!==0 && <Divider/>  }
            <Flex gap="12px">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon fontSize="23px" as={trans.icon} />
              </Grid>
              <Flex justify="space-between" w="full" align="start">
                <Stack spacing={0}>
                  <Text textStyle="h6" color="black.80">
                    {trans.text}
                  </Text>{" "}
                  <Text fontSize="sm" color="black.80">
                    {" "}
                    {trans.time}
                  </Text>
                </Stack>{" "}
                <Text textStyle="h6" color="black.80">
                  {trans.amount}
                </Text>{" "}
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button mt="45px"  bg="#F3F3F7" color="black.800" w="full">View All</Button>
    </CustomCard>
  );
};

export default Transactions;
