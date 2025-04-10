import { Box, Flex, Text } from "@chakra-ui/react";

const ChatBubble = ({ text, sender }) => {
  const isUser = sender === "user";

  return (
    <Flex
      justify={isUser ? "flex-end" : "flex-start"}
      w="full"
      my="2"
    >
      <Box
        px="4"
        py="2"
        borderRadius="12px"
        maxW="60%"
        bg={isUser ? "green.500" : "gray.700"}
        color="white"
      >
        <Text>{text}</Text>
      </Box>
    </Flex>
  );
};

export default ChatBubble;
