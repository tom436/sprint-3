export default function EmailList(props) {
    const {email}=props
    
    return (
       
            <li><div className="from">{email.from}</div><div className="subject">{email.subject} -</div><div className="body">{email.body.slice(0, 40)}</div></li>
       
    )
}

