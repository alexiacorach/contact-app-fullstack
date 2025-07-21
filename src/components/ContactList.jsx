import Contact from "./Contact"


function ContactList({contacts}){
    return(
        <div>
        {contacts.map((contact, index) => (
            <Contact key={index} name = {contact.name} phone={contact.phone} email={contact.email} notes={contact.notes} />
        ))}
        </div>
    )
}

export default ContactList;