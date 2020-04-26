const { Link } = ReactRouterDOM

import LeftNav from '../cmps/LeftNav.jsx'

import EmailList from '../cmps/EmailList.jsx'
import emailService from '../services/emailServices.js'

export default class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails()
    }
    loadEmails() {
        emailService.query(this.state.filterBy)
            .then(emails => {

                this.setState({ emails })
            })
    }

    render() {
        const { emails } = this.state
        return (
            !emails ? 'Loading...' :
                <section>
                    <LeftNav />
                    <EmailList emails={emails} />
                </section>
        )
    }
}