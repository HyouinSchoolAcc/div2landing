import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { ChakraProvider, extendTheme, Box, Button } from "@chakra-ui/react";
import { useState, useMemo } from "react";

import BlogList  from './pages/BlogList';
import BlogPost  from './pages/BlogPost';
import Sidebar from "./components/Sidebar";
import Landing from "./pages/Landing";
import FriendsList from "./pages/FriendsList";
import MessagesList from "./pages/MessagesList";
import Chat from "./pages/Chat";
import Contribute from "./pages/Contribute";
import Error404 from "./pages/errors/error404.jsx";
import About from "./pages/About";        // NEW
import Help from "./pages/Help";          // NEW
import GroupDiscussion from "./pages/GroupDiscussion";  // NEW

const theme = extendTheme({});

function App() {
  const [activeChats, setActiveChats] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* The sidebar is absolutely positioned on the left */}
        <Sidebar activeChats={activeChats} setActiveChats={setActiveChats} />

        {/* 
          Main content is placed in a Box with dynamic margin-left
          (controlled by a custom hook or inline logic).
        */}
        <MainContent activeChats={activeChats} setActiveChats={setActiveChats} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

/**
 * A separate component so we can use hooks like useLocation easily.
 */
function MainContent({ activeChats, setActiveChats }) {
  const location = useLocation();

  // Decide how wide the sidebar is based on the route.
  // If we’re on /friends, /messages, /chat, or /updates, 
  // the sidebar is 300px total. Otherwise, 60px.
  const sidebarWidth = useMemo(() => {
    const path = location.pathname;
    if (
      path.startsWith("/friends") ||
      path.startsWith("/messages") ||
      path.startsWith("/chat") ||
      path.startsWith("/updates")
    ) {
      return 300; // 60px icon bar + 240px expanded panel
    }
    return 60; // just the narrow icon bar
  }, [location.pathname]);

  return (
    <>
      {/* 
        A floating “Home” button in the top-right corner, 
        always visible on every page. 
      */}
      <Box position="fixed" top="10px" right="10px" zIndex="2000">
        <Button as={Link} to="/" colorScheme="blue">
          Home
        </Button>
      </Box>
      <Box position="fixed" top="10px" right="10px" zIndex="2000" display="flex" gap="2">
    <Button as={Link} to="/" colorScheme="blue">
      Home
    </Button>
    <Button as={Link} to="/blog" colorScheme="teal">
      Blog
    </Button>
  </Box>
      {/* The main content container, offset by sidebarWidth */}
      <Box
        ml={`${sidebarWidth}px`}
        minH="100vh"
        bg="gray.50"
        p="4"
        transition="margin-left 0.2s ease"
      >
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/group" element={<GroupDiscussion />} />
        <Route path="/blog"        element={<BlogList />} />
        <Route path="/blog/:slug"  element={<BlogPost />} />
          <Route path="/" element={<Landing />} />
          <Route
            path="/friends"
            element={
              <FriendsList activeChats={activeChats} setActiveChats={setActiveChats} />
            }
          />
          <Route
            path="/messages"
            element={<MessagesList activeChats={activeChats} />}
          />
          <Route
            path="/chat"
            element={<Chat activeChats={activeChats} setActiveChats={setActiveChats} />}
          />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
