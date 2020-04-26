
import EmailPreview from 'EmailPreview.jsx'

export default function EmailList(props) {

    
    const {emails}=props
    return (
        <ul className="email-list">
            {emails.map(email=>{
            return <EmailPreview key={email.id} email={email}/>
            })}       
        </ul>
    )
}

