import React from "react";

interface ContactProps {
  id: number;
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  onDelete: (id: number) => void; 
}

const Contact: React.FC<ContactProps> = ({ id, name, phone, email, notes, onDelete}) => {
  return (
    <div className="contacto">
     <p><strong>{name}</strong> - {phone}</p>
      {email && <p>Email: {email}</p>}
      {notes && <p>Notas: {notes}</p>}
      <button onClick={() => onDelete(id)}> Eliminar</button>
    </div>
  );
};



export default Contact;
