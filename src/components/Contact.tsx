import React from "react";

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
    <div className="contacto">
     <p><strong>{name}</strong> - {phone}</p>
      {email && <p>Email: {email}</p>}
      {notes && <p>Notas: {notes}</p>}
      <button onClick={() => onEdit({id, name, phone, email, notes})}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};



export default Contact;
