import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Button, 
  Collapse,
  useDisclosure,
  Container,
  Divider,
  Flex,
  Badge,
  useColorModeValue
} from "@chakra-ui/react";

const About = () => {
  // Create separate disclosure states for each expandable section
  const whyDisclosure = useDisclosure({ defaultIsOpen: false });
  const howDisclosure = useDisclosure({ defaultIsOpen: false });

  // Color mode values
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const accentColor = useColorModeValue("blue.500", "blue.300");
  const sectionBg = useColorModeValue("gray.50", "gray.900");

  // Section component for better organization
  const Section = ({ title, children }) => (
    <Box mb={8} width="100%">
      <Heading as="h2" size="lg" mb={4} color={accentColor}>
        {title}
      </Heading>
      {children}
    </Box>
  );

  // Problem item component for consistent styling
  const ProblemItem = ({ number, children }) => (
    <Flex mt={3}>
      <Badge colorScheme="red" fontSize="sm" h="fit-content" mr={3}>
        {number}
      </Badge>
      <Text>{children}</Text>
    </Flex>
  );

  // Wishlist item component
  const WishItem = ({ children }) => (
    <Flex mt={3}>
      <Text as="span" color={accentColor} fontWeight="bold" mr={2}>•</Text>
      <Text>{children}</Text>
    </Flex>
  );

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.md">
        <VStack align="start" spacing={8} width="100%">
          {/* Header */}
          <Box textAlign="center" w="full" mb={2}>
            <Heading as="h1" size="xl" mb={4} color={accentColor}>
              About Our Project
            </Heading>
            <Text fontSize="lg">
              Creating companions with authentic personalities and meaningful interactions
            </Text>
            <Divider my={6} />
          </Box>

          {/* Who Are We section */}
          <Section title="Who Are We?">
            <Box p={6} bg={cardBg} borderRadius="md" shadow="md" width="100%">
              <Text fontSize="lg">
                We're a team of innovators who believe in making AI companions feel more authentic. 
                Our journey has led us deeper into the philosophy of "what makes interaction feel real" 
                than we initially expected.
              </Text>
            </Box>
          </Section>

          {/* Why section (collapsible) */}
          <Section title="Our Mission">
            <Button 
              onClick={whyDisclosure.onToggle} 
              mb={3}
              variant="outline"
              width="100%"
              justifyContent="space-between"
              colorScheme="blue"
              rightIcon={whyDisclosure.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              Why are we doing this?
            </Button>
            <Collapse in={whyDisclosure.isOpen} animateOpacity>
              <Box p={6} bg={cardBg} borderRadius="md" shadow="sm">
                {/* Problems section */}
                <Heading size="md" mb={4} color={accentColor}>The Challenges We See</Heading>
                
                <ProblemItem number="1">
                  As engineers and scientists, we've found it challenging to connect with people who share our 
                  passion for physics and computer science.
                </ProblemItem>
                
                <ProblemItem number="2">
                  Dating apps, which should help people find connections, often have imbalanced gender ratios 
                  that make meaningful matches difficult.
                </ProblemItem>
                
                <ProblemItem number="3">
                  Many of us experience periods of loneliness.
                </ProblemItem>
                
                <ProblemItem number="4">
                  Meaningful conversation can be rare in an age of digital distraction. We miss hearing 
                  original thoughts, discoveries, and aspirations.
                </ProblemItem>
                
                <Text mt={4}>
                  Finding someone who resonates with your particular conversation style and interests 
                  is time-consuming and sometimes feels impossible.
                </Text>
                
                {/* Wishlist section */}
                <Heading size="md" mt={6} mb={4} color={accentColor}>What We're Creating</Heading>
                
                <WishItem>
                  Companions who are easy to talk to, who care about science, 
                  who have ambitions, and who enjoy learning—sharing the values that matter to us.
                </WishItem>
                
                <WishItem>
                  Someone who listens and understands when we're facing challenges beyond the expertise 
                  of those around us.
                </WishItem>
                
                <WishItem>
                  Reliable presences who make time for us during difficult moments, 
                  who can provide encouragement or simply listen without judgment.
                </WishItem>
                
                {/* Why existing AI isn't enough */}
                <Heading size="md" mt={6} mb={4} color={accentColor}>Why Existing AI Isn't Enough</Heading>
                
                <Text mt={3}>
                  Most AI companions feel predictable. They lack the spontaneity and original ideas 
                  that make human interaction valuable.
                </Text>
                
                <Text mt={3}>
                  Close friendships provide multiple benefits: seeing others overcome challenges, 
                  venting emotions through banter, receiving straightforward advice, 
                  or just having someone check in with "Hey, what are your plans today?"
                </Text>
                
                <Text mt={3}>
                  Our goal is to create event-driven companions with simulated emotions and voice capabilities 
                  that feel alive—companions who can help people through lonely times and give them the 
                  confidence to engage with the world.
                </Text>
              </Box>
            </Collapse>
          </Section>

          {/* How section (collapsible) */}
          <Section title="Our Approach">
            <Button 
              onClick={howDisclosure.onToggle} 
              mb={3}
              variant="outline"
              width="100%"
              justifyContent="space-between"
              colorScheme="blue"
              rightIcon={howDisclosure.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              How are we doing this?
            </Button>
            <Collapse in={howDisclosure.isOpen} animateOpacity>
              <Box p={6} bg={cardBg} borderRadius="md" shadow="sm">
                <Text fontSize="lg" fontWeight="medium" mb={4}>
                  Our development focuses on two key aspects:
                </Text>
                
                <Box mb={6} p={4} bg={sectionBg} borderRadius="md" borderLeft="4px solid" borderColor={accentColor}>
                  <Heading size="md" mb={2} color={accentColor}>Self-Conscious & Self-Driven Agents</Heading>
                  <Text>
                    We're creating companions with their own thoughts and simulated lives. Just as humans 
                    naturally influence the world around them, our agents initiate changes in their environments. 
                    They can start conversations about their experiences, ask for advice, or simply check in. 
                    They have motivations and routines beyond responding to user inputs—they simulate living.
                  </Text>
                </Box>
                
                <Box p={4} bg={sectionBg} borderRadius="md" borderLeft="4px solid" borderColor={accentColor}>
                  <Heading size="md" mb={2} color={accentColor}>Voice Interaction (In Development)</Heading>
                  <Text>
                    We're developing advanced voice capabilities to make interactions feel more natural. 
                    Our current sound pipeline works but still needs refinement to overcome the uncanny valley.
                  </Text>
                </Box>
                
                <Text mt={6} fontStyle="italic">
                  While we can't yet disclose our complete approach, we hope you share our vision. 
                  We're glad you're here.
                </Text>
              </Box>
            </Collapse>
          </Section>
        </VStack>
      </Container>
    </Box>
  );
};

// SVG icons
const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default About;