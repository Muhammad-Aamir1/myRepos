import { HStack, Stack, Text, Button, Icon, Tag } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { LiaUploadSolid } from "react-icons/lia";
const Portfolio = () => {
  return (
    <HStack
      bg="white"
      justify="space-between"
      borderRadius="xl"
      p="24px"
      align={{
        base: "flex-start",
        xl: "center",
       }}
      flexDir={{
        base: "column",
        xl: "row",
        
      }}
       
      spacing={{
        xl: 0,
        base: 4,
        
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="Black.80">
            <Text fontSize="14px"> Total Portfolio Value</Text>
            <Icon as={FaInfoCircle}></Icon>
          </HStack>

          <Text fontWeight="500" fontSize="24px" lineHeight="28px">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack  >
          <HStack color="Black.80">
            <Text fontSize="14px"> Wallet Balances</Text>
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
                22.39401000
              </Text>
              <Tag>BTC</Tag>
            </HStack>

            <HStack>
              <Text fontWeight="500" fontSize="24px" lineHeight="28px">
                ₹ 1,300.00
              </Text>
              <Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack w="235px" h="38px" spacing="8px">
        <Button leftIcon={<Icon as={LiaDownloadSolid} />} w="107" h="38px">
          Deposit
        </Button>
        <Button leftIcon={<Icon as={LiaUploadSolid} />} w="107" h="38px">
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
