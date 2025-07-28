import React from "react";
import '../styles/contactList.css'

interface ContactProps {
  id: number;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  onDelete: (id: number) => void; 
  onEdit: (contact : {
    id: number;
    name: string;
    phone: string;
    email?: string;
    notes?: string;
  }) => void;
}

const Contact: React.FC<ContactProps> = ({ id, name, phone, email, notes, onDelete , onEdit}) => {
  return (
    <div className="contact">
     <p><strong>{name}</strong> - {phone}</p>
      {email && <p>Email: {email}</p>}
      {notes && <p>Notas: {notes}</p>}
      <button className="edit-btn" onClick={() => onEdit({id, name, phone, email, notes})}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};



export default Contact;
