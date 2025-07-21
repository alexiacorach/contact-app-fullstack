import React from "react";
import Contact from "./Contact";


interface Contact {
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          notes={contact.notes}
        />
      ))}
    </div>
  );
};

export default ContactList;
