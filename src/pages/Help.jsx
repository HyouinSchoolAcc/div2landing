import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Container,
  SimpleGrid,
  Flex,
  Badge,
  useColorModeValue
} from "@chakra-ui/react";

const ContributionCard = ({ emoji, title, description, skillLevel }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  
  return (
    <Box 
      p={5} 
      shadow="md" 
      borderWidth="1px" 
      borderRadius="lg" 
      bg={cardBg}
      borderColor={cardBorder}
      transition="transform 0.3s"
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Flex align="center" mb={3}>
        <Text fontSize="xl" mr={3}>{emoji}</Text>
        <Heading size="md">{title}</Heading>
      </Flex>
      <Text mb={3}>{description}</Text>
      {skillLevel && (
        <Badge colorScheme={skillLevel === "Beginner" ? "green" : skillLevel === "Intermediate" ? "yellow" : "red"}>
          {skillLevel}
        </Badge>
      )}
    </Box>
  );
};

const Help = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  
  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack align="start" spacing={8}>
          <Box textAlign="center" w="full">
            <Heading size="xl" mb={4} color={headingColor}>
              Join Our Universe
            </Heading>
            <Text fontSize="lg" maxW="container.md" mx="auto">
              We're building something special and could use your expertise. 
              See how you can contribute to our growing community.
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
            <ContributionCard
              emoji="✍️"
              title="Content Creation"
              description="Help us develop character responses to diverse scenarios. We need creative writers who can craft authentic dialogue and narratives."
              skillLevel="Intermediate"
            />
            
            <ContributionCard
              emoji="🎤"
              title="Voice Technology"
              description="Experienced with TTS systems? Help us train a voice pipeline (experience with MIMI codec and Cozy Speech paper is a plus)."
              skillLevel="Advanced"
            />
            
            <ContributionCard
              emoji="💡"
              title="User Experience"
              description="Suggest scenarios and provide valuable feedback to help us refine the experience and make it more engaging for all users."
              skillLevel="Beginner"
            />
            
            <ContributionCard
              emoji="🖥️"
              title="Infrastructure"
              description="Write and maintain server code for our H100 clusters. Help us scale our technology to reach more users."
              skillLevel="Advanced"
            />
          </SimpleGrid>
          
          <Box w="full" textAlign="center" pt={6}>
            <Text fontSize="lg">
              Ready to help shape the future? Reach out to us at <b>yuezel2@illinois.edu</b>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Help;