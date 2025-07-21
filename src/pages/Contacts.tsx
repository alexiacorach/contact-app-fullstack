import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

interface Contact {
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <Navbar />
      <h1>Contacts List</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contacts;
