import { useState } from "react";
import '../styles/form.css';

interface Contact {
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

interface ContactFormProps {
  addContact: (contact: Contact) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
    alert("Please enter both Name and Phone.");
    return; 
    }

    

    addContact({ name, phone, email, notes });
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
    </div>
  );
};

export default ContactForm;
