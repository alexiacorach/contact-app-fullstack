

function Contact({name, phone, email, notes}){
    return(
        <div className="contacto">
            <h2>{name}</h2>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{notes}</p>
        </div>
    )
}

export default Contact