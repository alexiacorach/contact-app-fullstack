import React from "react";
import Contact from "./Contact";


interface Contact {
  id:number,
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

interface ContactListProps {
  contacts: Contact[];
  onDelete: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDelete  }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <Contact
           key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          notes={contact.notes}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
