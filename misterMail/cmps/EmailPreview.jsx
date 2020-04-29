const { Link } = ReactRouterDOM
import utilService from '../services/utilService.js'




export  function EmailPreview(props) {
    const {email,onSetStar}=props
    
    const isRead = email.isRead;
    const isStarred=email.isStarred;
    const envelop= isRead ? 'far fa-envelope' : 'fas fa-envelope'
    const star= isStarred ? 'fas fa-star' : 'far fa-star'
    const time=utilService.getTime(email.sentAt)
    
    return (

        <li className={`${envelop}`}><span  className={`${star}`} onClick={()=>{
            onSetStar(email);            
        }}></span><Link to={`/email/details/${email.id}`}><div className={`from`}>{email.from}</div><div className={`subject `}>
            {email.subject} -</div><div className="body">{email.body.slice(0, 40)}
    </div><span className="time">{time}</span></Link></li>

    )
}

// 8<button  class="fas fa-trash-alt"></button>