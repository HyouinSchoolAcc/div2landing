import { Box, IconButton, VStack, Text, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import {
  IconUsers,
  IconMessage,
  IconInfoCircle,
  IconHeartHandshake,
} from "@tabler/icons-react";

function Sidebar({ activeChats }) {
  const location = useLocation();

  const isMessagesRoute =
    location.pathname.startsWith("/messages") ||
    location.pathname.startsWith("/chat");

  const isFriendsRoute = location.pathname.startsWith("/friends");

  return (
    <Box
      as="nav"
      position="fixed"
      left="0"
      top="0"
      height="100vh"
      zIndex="1000"
      display="flex"
      flexDirection="row"
      pointerEvents="auto"
    >
      {/* 1) Narrow Icon Bar */}
      <Box
        w="60px"
        bg="gray.900"
        color="white"
        borderRight="1px solid gray"
        display="flex"
        flexDirection="column"
        alignItems="center"
        py="4"
      >
        {/* Messages icon */}
        <IconButton
          as={Link}
          to="/messages"
          icon={<IconMessage size={20} />}
          variant="ghost"
          aria-label="Messages"
          mb="4"
          color="white"
        />
        {/* Friends icon */}
        <IconButton
          as={Link}
          to="/friends"
          icon={<IconUsers size={20} />}
          variant="ghost"
          aria-label="Friends"
          mb="4"
          color="white"
        />
        {/* Who Are We icon */}
        <IconButton
          as={Link}
          to="/about"
          icon={<IconInfoCircle size={20} />}
          variant="ghost"
          aria-label="Who Are We"
          mb="4"
          color="white"
        />
        {/* Help Us Out icon */}
        <IconButton
          as={Link}
          to="/help"
          icon={<IconHeartHandshake size={20} />}
          variant="ghost"
          aria-label="Help Us Out"
          color="white"
        />
      </Box>

      {/* 2) Expanded Section */}
      {isMessagesRoute && (
        <Box
          w="240px"
          bg="gray.800"
          color="white"
          borderRight="1px solid gray"
          overflowY="auto"
        >
          <VStack align="start" spacing={1} p="2">
            <Button
              as={Link}
              to="/group"
              variant="solid"
              w="full"
              colorScheme="purple"
              mb="3"
            >
              Group Discussion
            </Button>

            {activeChats.length === 0 ? (
              <Text color="gray.400">No chats yet</Text>
            ) : (
              activeChats.map((contact, index) => (
                <Button
                  as={Link}
                  to={`/chat?contact=${encodeURIComponent(contact)}`}
                  key={index}
                  variant="ghost"
                  justifyContent="flex-start"
                  w="full"
                  color="white"
                  _hover={{ bg: "gray.700" }}
                >
                  {contact}
                </Button>
              ))
            )}
          </VStack>
        </Box>
      )}

      {isFriendsRoute && (
        <Box
          w="240px"
          bg="gray.800"
          color="white"
          borderRight="1px solid gray"
          p="4"
        >
          <Text fontSize="lg" mb="2">
            Discover AIs
          </Text>
          {/* Optional: Add discovery widgets here */}
        </Box>
      )}
    </Box>
  );
}

export default Sidebar;
