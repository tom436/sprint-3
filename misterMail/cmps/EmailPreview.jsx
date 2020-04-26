const { Link } = ReactRouterDOM


export default function EmailList(props) {
    const {email}=props
    
    return (
       
            <li><Link to={`Email/${email.id}`}><div className="from">{email.from}</div><div className="subject">
                {email.subject} -</div><div className="body">{email.body.slice(0, 40)}
                </div></Link></li>
       
    )
}

