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
  onEdit: (contact : Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDelete, onEdit }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact
           key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          notes={contact.notes}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ContactList;
