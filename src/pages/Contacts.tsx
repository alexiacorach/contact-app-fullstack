import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

export interface Contact {
  id: number;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // cargar contactos iniciales
  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then((res) => res.json())
      .then((data: Contact[]) => setContacts(data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  // crear contacto 
  const createContact = async (contact: Omit<Contact, "id">) => {
    try {
      const res = await fetch("http://localhost:3001/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      const data = await res.json();
      if (res.ok && data.id) {
        setContacts((prev) => [...prev, { ...contact, id: data.id }]);
      } else {
        alert("Error creating contact: " + (data.message || ""));
      }
    } catch (error) {
      console.error("Network error creating contact:", error);
      alert("Network error.");
    }
  };

  const deleteContact = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/contacts/${id}`, {
        method: "DELETE",
      });

      setContacts((prevContacts) => prevContacts.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Error deleting contacto:", err);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Contacts List</h1>
      <ContactForm onSubmit={createContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default Contacts;
