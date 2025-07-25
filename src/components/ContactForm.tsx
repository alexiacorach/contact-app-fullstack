import { useState, useEffect } from "react";
import "../styles/form.css";

interface ContactFormProps {
  onSubmit: (contact: {
    id?: number;
    name: string;
    phone: string;
    email?: string;
    notes?: string;
  }) => void;
  editingContact?: {
    id?: number;
    name: string;
    phone: string;
    email?: string;
    notes?: string;
  } | null;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  editingContact,
  
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
      setEmail(editingContact.email || "");
      setNotes(editingContact.notes || "");
    }
  }, [editingContact]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      alert("Please enter both Name and Phone.");
      return;
    }

    const newContact = {
      id: editingContact?.id,
      name,
      phone,
      email,
      notes,
    };
    onSubmit(newContact);

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

        <button type="submit">{editingContact ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default ContactForm;
