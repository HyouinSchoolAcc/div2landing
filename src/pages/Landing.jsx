import { VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <VStack justify="center" align="center" h="100vh" spacing={8}>
      <Heading size="2xl">Simulated Universe</Heading>
      <Button as={Link} to="/friends" p="2" variant="solid" colorScheme="blue">
        Choose Companion
      </Button>
    </VStack>
  );
};

export default Landing;
