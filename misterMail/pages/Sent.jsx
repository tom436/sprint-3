const { Route } = ReactRouterDOM

import LeftNav from '../cmps/LeftNav.jsx'
import {eventBus} from "../services/eventBusService.js"
import EmailList from '../cmps/EmailList.jsx'
import emailService from '../services/emailServices.js'
import EmailCompose from 'EmailCompose.jsx';
<EmailCompose/>
export default class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails('sent')

    }


    loadEmails(dest) {
        emailService.query(this.state.filterBy,dest)
            .then(emails => {
                this.setState({ emails })
            })
    }

    render() {
        const { emails } = this.state
        return (
            !emails ? 'Loading...' :
                <section className="list-container">
                    <LeftNav />

                    <EmailList emails={emails} />

                </section>
        )
    }
}