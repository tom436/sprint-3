const { Route } = ReactRouterDOM

import {LeftNav} from '../cmps/LeftNav.jsx'
import  eventBus  from "../services/eventBusService.js"
import {EmailList} from '../cmps/EmailList.jsx'
import emailService from '../services/emailServices.js'
import {EmailCompose} from './EmailCompose.jsx';
<EmailCompose />
export  class MisterEmail extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        const folder = this.props.match.params.folderName
        console.log(folder);
        this.loadEmails(folder)
    }
  

    loadEmails(dest) {
        emailService.query(this.state.filterBy, dest)
            .then(emails => {
                this.setState({ emails })
            })
    }
    onSendMail = (subject, name, body) => {

        emailService.sendEmail(subject, name, body)
            .then(()=> {
                const folder = this.props.match.params.folderName
                this.loadEmails(folder)
            })
    }

    render() {
        const { emails } = this.state
        return (
            !emails ? 'Loading...' :
                <section className="list-container">
                    <LeftNav />
                    <EmailCompose onSendMail={this.onSendMail} />

                    <EmailList emails={emails} />

                </section>
        )
    }
}