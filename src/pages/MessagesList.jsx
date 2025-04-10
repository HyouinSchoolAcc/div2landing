import { VStack, Heading, Button, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MessagesList = ({ activeChats }) => {
  return (
    <Box p="4">
      <Heading size="lg" mb="4">
        Your Active Chats
      </Heading>
      {activeChats.length === 0 ? (
        <Text>No conversations yet. Start messaging someone!</Text>
      ) : (
        <VStack align="start" spacing={3}>
          {activeChats.map((contact, index) => (
            <Button
              as={Link}
              to={`/chat?contact=${encodeURIComponent(contact)}`}
              key={index}
              variant="solid"
              w="full"
            >
              {contact}
            </Button>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default MessagesList;
