import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Navbar from "../components/Navbar";

function Contacts(){
    const[contacts, setContacts] = useState([]);
    const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

    return(
        <div>
            <Navbar />
            <h1> Contacts List </h1>
            <ContactForm addContact={addContact}/>
            <ContactList contacts={contacts}/>
        </div>
    )
}

export default Contacts; 