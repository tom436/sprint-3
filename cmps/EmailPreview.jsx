export default function EmailList(props) {
    const {email}=props
    
    return (
       
            <li><span className="from">{email.from}</span><span className="subject">{email.subject} -</span><span className="body">{email.body.slice(0, 40)}</span></li>
       
    )
}

