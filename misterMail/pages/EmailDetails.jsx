
import {LeftNav} from '../cmps/LeftNav.jsx'

import emailService from '../services/emailServices.js'

export class EmailDetails extends React.Component {
    state = {

    }



    componentDidMount() {

        const id = this.props.match.params.theEmailId
        emailService.getById(id).then(email => {
            emailService.setRead(email)
            this.setState({ email })
        })

    }

    onRemove = () => {
        const folder = this.props.match.params.folderName

        emailService.remove(this.state.email.id)
            .then(
                this.props.history.push(`/email/inbox`)
            )
    }


    render() {
        const { email } = this.state
        return (
            !email ? 'Loading...' :
                <section>
                    <LeftNav/>

                    <div className="email-body">
                        <div className="mail-head"><h3>{email.subject}</h3><button onClick={this.onRemove} className="fas fa-trash-alt"></button ></div>
                        <div className="fas fa-user-ninja mail-deatils"> {email.from}</div>
                        <div > {email.body}</div>
                    </div>
                </section>
        )
    }
}