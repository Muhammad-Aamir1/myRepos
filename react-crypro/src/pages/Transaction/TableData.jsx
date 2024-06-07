import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
  Text,
  Stack,
} from "@chakra-ui/react";
 const TableData = () => {
  const tables = [
    {
      id: "HD82NA2H",
      date: "2024-03-12",
      time: "08:23PM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+$3000",
      status: "cancelled",
    },
    {
      id: "HD82NA2H",
      date: "2024-03-12",
      time: "08:23PM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+$3000",
      status: "pending",
    },
    {
      id: "HD82NA2H",
      date: "2024-03-12",
      time: "08:23PM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+$3000",
      status: "completed",
    },
    {
      id: "HD82NA2H",
      date: "2024-03-12",
      time: "08:23PM",
      type: {
        name: "INR Deposit",
        tag: "E-transfer",
      },
      amount: "+$3000",
      status: "processing",
    },
     
  ];
 
  const statusColor =  
    {
      pending: "#797E82",
      completed: "green",
      cancelled: "red",
      processing: "#F5A50B",
    }
  
  return (
    <div>
      <TableContainer>
        <Table variant="simple" colorScheme="gray">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Date & Time</Th>
              <Th>Type </Th>
              <Th>Amount </Th>
              <Th>Status </Th>
            </Tr>
          </Thead>
          <Tbody>
            {tables.map((table) => (
              <Tr key={table.id}>
                <Td fontSize="sm" fontWeight="medium">
                  {table.id}
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">
                      {table.date}
                    </Text>
                    <Text color="black.60" fontSize="xs">
                      {table.time}
                    </Text>
                  </Stack>{" "}
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize="sm" fontWeight="medium">
                      {table.type.name}
                    </Text>
                    <Text color="black.60" fontSize="xs">
                      {table.type.tag}
                    </Text>
                  </Stack>{" "}
                </Td>
                <Td fontSize="sm" fontWeight="medium">
                  {table.amount}
                </Td>
                <Td>
                
                  <Tag fontSize="sm" px="6px" py="4px"  bg={statusColor[table.status]} color="white" borderRadius="full" fontWeight="medium">
                  {table.status}
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
