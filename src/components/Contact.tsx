import React from "react";

interface ContactProps {
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

const Contact: React.FC<ContactProps> = ({ name, phone, email, notes }) => {
  return (
    <div className="contacto">
      <h2>{name}</h2>
      <p>{phone}</p>
      {email && <p>{email}</p>}
      {notes && <p>{notes}</p>}
    </div>
  );
};

export default Contact;
