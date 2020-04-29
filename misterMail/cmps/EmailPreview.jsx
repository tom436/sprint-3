const { Link } = ReactRouterDOM
import utilService from '../services/utilService.js'




export  function EmailPreview(props) {
    const {email,onSetStar}=props
    
    const isRead = email.isRead;
    const isStarred=email.isStarred;
    const envelop= isRead ? 'far fa-envelope' : 'fas fa-envelope'
    const bold= isRead ? '' : 'bold'
    const star= isStarred ? 'fas fa-star' : 'far fa-star'
    const time=utilService.getTime(email.sentAt)
    
    return (

        <li ><span className={`${envelop} envelop`}></span><span  className={`${star} star`} onClick={()=>{
            onSetStar(email);            
        }}></span><Link to={`/email/details/${email.id}`}><span className={`from ${bold}`}>{email.from}</span><span className={`subject ${bold}`}>
            {email.subject} -</span><span className="body">{email.body.slice(0, 40)}
    ...</span><span className="time">{time}</span></Link>
    </li>

    )
}

// 8<button  class="fas fa-trash-alt"></button>