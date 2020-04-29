

import emailService from '../services/emailServices.js'
import { LongText } from "../../LongText.jsx"
import { eventBus } from "../services/eventBusService.js"

export class EmailDetails extends React.Component {
    state = {

    }

    componentDidMount() {
        
        const id = this.props.match.params.theEmailId
        eventBus.emit('update-bar', { txt: '' })

        emailService.getById(id).then(email => {
            emailService.setRead(email)
            this.setState({ email })
        }).catch(emailService.getByIdDraft(id).then((draft) => {
            this.setState({ draft })
        }))


    }

    onRemove = () => {

        emailService.remove(this.state.email.id)
            .then(()=>{                
                eventBus.emit('show-msg', { txt: 'Email Deleted' })

                this.props.history.goBack()}
            )
    }
    draftOrMAil = () => {
        const { email, draft } = this.state
        if(!email&&!draft) return 'Loading...'
        else if (email) {
            return (
                <section>
                    <div className="email-body">
                        <div className="mail-head"><h3>{email.subject}</h3><button onClick={this.onRemove} className="fas fa-trash-alt"></button ></div>
                        <div className="fas fa-user-ninja mail-deatils"> {email.from}</div>
                        <LongText text={email.body} />

                    </div>
                </section>
            )
        }
        else if (draft) {
            return(
            <section>
                <div className="email-body">
                    <div className="mail-head"><h3>{draft.subject}</h3><button onClick={this.onRemove} className="fas fa-trash-alt"></button ></div>
                    <LongText text={draft.body} />
                </div>
            </section>
            )
        }
         


    }

    render() {
        return (
            this.draftOrMAil()

        )
    }
}