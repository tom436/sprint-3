

import emailService from '../services/emailServices.js'

export class EmailDetails extends React.Component {
    state = {

    }

    componentDidMount() {

        const id = this.props.match.params.theEmailId

        emailService.getById(id).then(email => {
            emailService.setRead(email)
            this.setState({ email })
        }).catch(emailService.getByIdDraft(id).then((draft) => {
            console.log(draft); 
            this.setState({ draft })
        }))


    }

    onRemove = () => {

        emailService.remove(this.state.email.id)
            .then(
                this.props.history.goBack()
            )
    }
    draftOrMAil = () => {
        const { email, draft } = this.state
        if(!email&&!draft) return 'Loading...'
        else if (email) {
            console.log('why nottttttt');    
            return (
                <section>
                    <div className="email-body">
                        <div className="mail-head"><h3>{email.subject}</h3><button onClick={this.onRemove} className="fas fa-trash-alt"></button ></div>
                        <div className="fas fa-user-ninja mail-deatils"> {email.from}</div>
                        <div > {email.body}</div>
                    </div>
                </section>
            )
        }
        else if (draft) {
            return(
            <section>
                <div className="email-body">
                    <div className="mail-head"><h3>{draft.subject}</h3><button onClick={this.onRemove} className="fas fa-trash-alt"></button ></div>
                    <div > {draft.body}</div>
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