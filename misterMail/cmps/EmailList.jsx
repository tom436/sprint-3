
import {EmailPreview} from './EmailPreview.jsx'

export  function EmailList(props) {
    
    const {emails,onSetStar}=props


    return (
        <ul className="email-list">
            {emails.map(email=>{
            return <EmailPreview key={email.id} email={email} onSetStar={onSetStar}/>
            })}       
        </ul>
    )
}

