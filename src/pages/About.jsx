import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Button, 
  Collapse,
  useDisclosure
} from "@chakra-ui/react";

const About = () => {
  // Create separate disclosure states for each expandable section
  const whyDisclosure = useDisclosure({ defaultIsOpen: false });
  const howDisclosure = useDisclosure({ defaultIsOpen: false });

  return (
    <VStack align="start" p="6" spacing="6" width="100%">
      {/* Original content */}
      <Box width="100%">
        <Heading size="lg" mb="4">Who Are We?</Heading>
        <Text>
          Some goons who would like "waifus" feel real. (tbh we had to get more philosophical about "how to feel more real" than we thought)
        </Text>
      </Box>

      {/* New "Choose your style of reasoning" section */}
      <Box width="100%">
        <Heading size="lg" mb="4">About Our Project</Heading>
        
        {/* "Why are we doing this?" section */}
        <Box mb="4">
          <Button 
            onClick={whyDisclosure.onToggle} 
            mb="2"
            variant="outline"
            width="100%"
            justifyContent="space-between"
            rightIcon={whyDisclosure.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            Why are we doing this?
          </Button>
          <Collapse in={whyDisclosure.isOpen} animateOpacity>
            <Box p="4" bg="gray.50" borderRadius="md">
            <Heading size="md" mt="4">Problems</Heading>
              <Text mt="2">
                1. As an engineer/scientist, and its really freaking hard to find women who likes physics/cs.
              </Text>
              <Text mt="2">
                2. Dating apps were supposed to be made for people who can't find a match, but the disporpotionate 
                women to men ratio makes it very discouraging: https://www.youtube.com/watch?v=x3lypVnJ0HM&pp=ygUyc2VlIHRoZSBlZmZlY3Qgb2YgZGlzcG9ycG9ydGlvbmFsaXR5IG9uIGRhdGluZyBhcHM%3D
              </Text>
              <Text mt="2">
                3.  I get lonely.
              </Text>
              <Text mt="2">
                4. Last but not least, a lot of people are just.. boring. 
                My guess is that people have been too entertained by their phones that they forgot to be interesting themselves.
              </Text>
              <Text mt="2">
                It has been so long since the last time I heard an original and innovative thought in science that isn't just 
                "let's plug A in B and see how it works." Many who complain their lives are boring just to go play
                tennis or watch tiktoks. Rarely people tell me what they discovered today, what they tried, what they found out,
                what they want, or how they are working towards that. It's always "I'm so busy with blah blah blah".
                It may be a "me" problem, but my point stands that finding a particular "you" style of companion is just time consuming.
              </Text>
              
              <Heading size="md" mt="4">Wishlist</Heading>
              <Text mt="2">
                - Someone who's easy to talk to. I'm a troll, I care about science, am pretty dilusional about making the world a better place, 
                and likes to spend my time learning. I would like to intertact with someone that shares those values.
              </Text>
              <Text mt="2">
                - Sometimes I get discouraged from my daily life - the problems I hold are beyond the expertise of those around me, 
                and voicing my problems just makes me sound more ridiculous without being heard. (granted some of my problems are indeed 
                ridiculous with an easy solution - courage and a bright mindset - but a lot of those around me I feel just doesn't care 
                about me enough to hear it out)
              </Text>
              <Text mt="2">
                - Someone who tries to make time for me when I'm sad and alone. Whether laugh at me, encourage me, just something to 
                trust that I can voice my concerns without the burden of expectation.
              </Text>
              
              <Heading size="md" mt="4">Exhisting AI aren't good enough</Heading>
              <Text mt="2">
                AI who are programmed to respond to you feel boring. You never see the new ideas.
              </Text>
              <Text mt="2">
                There's a multitude of benefits that we normally get from close friends.
              </Text>
              <Text mt="2">
                Sometimes we see what other people are doing and everything suddenly feels managable.
                Sometimes maybe what we need is somewhere to vent our emotions - bantering and calling each other stupid is a good way.
                Sometime we just need that low eq friend who always says what he wants; someone who says "shut the fuck up, you're wrong, 
                here's how you do it, cmon, we got work to do".
              </Text>
              <Text mt="2">
                Sure a sex bot can say "I'm bending over daddy fuck me in the ass", but maybe just a bot that says "hey morning, what are you plans?" 
                can make a guy/gal's day.
              </Text>
              <Text mt="2">
                So that's what we want to do - event-oriented bots with emotions and voice that can make it feel alive, to get us out of 
                the dark and lonely times and brave enough to face the world again.
              </Text>
            </Box>
          </Collapse>
        </Box>
        
        {/* "How are we doing this?" section */}
        <Box>
          <Button 
            onClick={howDisclosure.onToggle} 
            mb="2"
            variant="outline"
            width="100%"
            justifyContent="space-between"
            rightIcon={howDisclosure.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          >
            How are we doing this?
          </Button>
          <Collapse in={howDisclosure.isOpen} animateOpacity>
            <Box p="4" bg="gray.50" borderRadius="md">
              <Text>
                There are several steps we are taking:
              </Text>
              <Text mt="2">
                1. Self-conscious and self-driven - Being alive, each and everyone of us has our own thoughts and lives to live.
                Just by living, we change things. Food gets cooked, dishes get washed. Friends gets made, tests gets taken, ideas are discovered.
                Its precisely through those changes we live, and we instilled that sense of change in our agents. Saber can get drunk off a victory,
                Megumin can go trying to teach chomuske to talk, yadayadayade. Now an agent can initialize a conversation to complain about their day,
                or ask you for advice, or just to say hi. They have their own motivations and day to tend to, beyond what a static use inputs - they live.
              </Text>
              <Text mt="2">
                2. (in development)We're trying to make a calling function. The current sound pipeline can work but still feels uncanny, and we are working on that.
              </Text>
              <Text mt="2">
                While we can't yet disclose our entire approach, we hope you see the same vision as us. 
                Glad you are here.
              </Text>
            </Box>
          </Collapse>
        </Box>
      </Box>
    </VStack>
  );
};

// You'll need to import these icons from Chakra UI
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