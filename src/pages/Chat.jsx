import { Flex, Heading, Button, Box, Input } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ChatBubble from "../components/ChatBubble";
import Loading from "../components/Loading";
import { IconArrowLeft, IconPhone } from "@tabler/icons-react";

const Chat = ({ activeChats, setActiveChats }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const chatRef = useRef();

  const queryParams = new URLSearchParams(location.search);
  const contact = queryParams.get("contact") || "Herta";
  const isTemporary = queryParams.get("temp") === "true";

  const [messages, setMessages] = useState([
    { sender: contact, text: `Hello! I am ${contact}.` },
  ]);
  const [userInput, setUserInput] = useState("");
  const [hasMessaged, setHasMessaged] = useState(false);

  const sendMessage = async (ev) => {
    ev.preventDefault();
    setHasMessaged(true);

    if (!activeChats.includes(contact)) {
      setActiveChats([...activeChats, contact]);
    }

    let newMessages = [
      ...messages,
      { sender: "user", text: userInput },
      { sender: contact, text: <Loading size="sm" /> },
    ];
    setMessages(newMessages);

    await new Promise((resolve) => setTimeout(resolve, 500));

    newMessages[newMessages.length - 1] = {
      sender: contact,
      text: `I heard you say: ${userInput}`,
    };
    setMessages([...newMessages]);

    setUserInput("");
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    return () => {
      if (!hasMessaged && isTemporary) {
        setActiveChats(activeChats.filter((c) => c !== contact));
      }
    };
    // eslint-disable-next-line
  }, [hasMessaged, isTemporary, contact]);

  return (
    <Flex direction="column" w="full" bg="gray.900" color="white" minH="100vh">
      {/* Header */}
      <Flex align="center" justify="space-between" bg="gray.800" p="4">
        <Button
          onClick={() => navigate("/friends")}
          variant="ghost"
          color="white"
        >
          <IconArrowLeft />
          &nbsp; Friends
        </Button>
        <Heading size="md">{contact}</Heading>
        <Flex gap="2">
          <Button
            onClick={() => navigate("/group")}
            variant="outline"
            colorScheme="purple"
          >
            Group Discussion
          </Button>
          <Button variant="ghost" color="white">
            <IconPhone size={20} />
          </Button>
        </Flex>
      </Flex>

      {/* Messages */}
      <Flex direction="column" flex="1" p="4" overflowY="auto">
        {messages.map((msg, i) => (
          <ChatBubble {...msg} key={i} />
        ))}
        <Box ref={chatRef} />
      </Flex>

      {/* Input Box */}
      <Flex as="form" onSubmit={sendMessage} p="4" bg="gray.800">
        <Input
          value={userInput}
          onChange={(ev) => setUserInput(ev.target.value)}
          placeholder="Type a message..."
          borderColor="gray.600"
          color="white"
        />
        <Button type="submit" ml="2">
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default Chat;
