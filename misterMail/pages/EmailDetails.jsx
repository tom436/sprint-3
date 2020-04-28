const { Link } = ReactRouterDOM
const { Route, Switch } = ReactRouterDOM

import LeftNav from '../cmps/LeftNav.jsx'
import EmailCompose from 'EmailCompose.jsx';


import EmailList from '../cmps/EmailList.jsx'
import emailService from '../services/emailServices.js'

export default class EmailApp extends React.Component {
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
        emailService.remove(this.state.email.id)
            .then(
                this.props.history.push('/Email')
            )
    }


    render() {
        const { email } = this.state
        return (
            !email ? 'Loading...' :
                <section>
                    <LeftNav compose={'/details/:theEmailId/'}/>

                    <div className="email-body">
                        <div className="mail-head"><h3>{email.subject}</h3><button onClick={this.onRemove} className="fas fa-trash-alt"></button ></div>
                        <div className="fas fa-user-ninja mail-deatils"> {email.from}</div>
                        <div > {email.body}</div>
                    </div>
                </section>
        )
    }
}