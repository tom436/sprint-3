
import { EmailList } from '../cmps/EmailList.jsx'
import emailService from '../services/emailServices.js'
import { eventBus } from "../services/eventBusService.js"
import { EmailFilter } from '../cmps/EmailFilter.jsx'

export class Folders extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.unsubscribeFromEventBus = eventBus.on('change-folder', (text) => {
            this.loadEmails(text.txt)
        })
        const folder = this.props.match.params.folderName
        this.loadEmails(folder)
    }
    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }

    loadEmails(dest) {
        emailService.query(this.state.filterBy, dest)
            .then(emails => {
                this.setState({ emails })
            })
    }
    onSetFilter = (filterBy) => {
        const folder = this.props.match.params.folderName
        this.setState({ filterBy }, () => { this.loadEmails(folder) })
    }
    onSetStar = (email) => {
        emailService.setStar(email).then(() => {
            const folder = this.props.match.params.folderName
            this.loadEmails(folder)
        })
    }


    render() {
        const { emails } = this.state
        return (
            !emails ? 'Loadinfdg...' :
                <section className="list-container">
                    <EmailFilter onSetFilter={this.onSetFilter} />
                    <EmailList emails={emails} onSetStar={this.onSetStar} />

                </section>
        )
    }
}