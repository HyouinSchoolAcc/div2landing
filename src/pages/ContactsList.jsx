import { useState } from "react";
import { VStack, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import contacts from "../data/contacts";

const ContactsList = () => {
    const navigate = useNavigate();
    const [selectedContact, setSelectedContact] = useState(null);

    const handleSelectContact = (contact) => {
        setSelectedContact(contact);
        navigate(`/chat?contact=${encodeURIComponent(contact)}`);
    };

    return (
        <VStack spacing={4} p={6}>
            <Heading size="lg">Choose a Companion</Heading>
            {contacts.map((contact, index) => (
                <Button
                    key={index}
                    onClick={() => handleSelectContact(contact)}
                    width="100%"
                    colorScheme="purple"
                    variant="outline"
                >
                    {contact}
                </Button>
            ))}
        </VStack>
    );
};

export default ContactsList;
