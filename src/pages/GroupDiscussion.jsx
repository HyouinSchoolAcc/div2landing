import { Box, Heading, VStack, Text, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const GroupDiscussion = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const send = () => {
    if (text.trim()) {
      setMessages([...messages, { sender: "You", text }]);
      setText("");
    }
  };

  return (
    <Box p="6">
      <Heading size="lg" mb="4">Group Discussion</Heading>
      <VStack align="start" spacing="3" mb="4">
        {messages.map((msg, i) => (
          <Box key={i} p="2" bg="gray.100" borderRadius="md">
            <Text><strong>{msg.sender}:</strong> {msg.text}</Text>
          </Box>
        ))}
      </VStack>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message"
        mb="2"
      />
      <Button onClick={send}>Send</Button>
    </Box>
  );
};

export default GroupDiscussion;
