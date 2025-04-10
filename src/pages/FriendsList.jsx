import { VStack, Heading, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import contacts from "../data/contacts";

const FriendsList = ({ activeChats, setActiveChats }) => {
  const navigate = useNavigate();

  // Called when user clicks on a friend
  const startChat = (contact) => {
    // Add to active chats if not already there
    if (!activeChats.includes(contact)) {
      setActiveChats([...activeChats, contact]);
    }
    // Go to the chat page for that friend
    navigate(`/chat?contact=${encodeURIComponent(contact)}`);
  };

  return (
    <Box p="4">
      <Heading size="lg" mb="4">
        Friends List
      </Heading>
      <VStack align="start" spacing={3}>
        {contacts.map((contact, index) => (
          <Button
            key={index}
            variant="outline"
            w="full"
            onClick={() => startChat(contact)}
          >
            {contact}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default FriendsList;
