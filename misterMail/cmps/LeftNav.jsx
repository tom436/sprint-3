const { NavLink } = ReactRouterDOM

import emailService from '../services/emailServices.js'
import { eventBus } from "../services/eventBusService.js"

import { StatusBar } from './StatusBar.jsx'

export class LeftNav extends React.Component {
    state = {
        pc: 0
    }

    componentDidMount() {
        this.unsubscribeFromEventBus = eventBus.on('update-bar', () => {
            emailService.howManyRead()
                .then(pc => {
                    console.log('im gher');
                    
                    this.setState({ pc })
                })
        })
        
        emailService.howManyRead()
            .then(pc => {

                this.setState({ pc })
            })
    }

    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }
    render() {
        return (
            <section className="left-nav">

                <ul>
                    <li><button className="fas fa-plus compose" onClick={() => {
                        eventBus.emit('change-display', { txt: 'sent' })
                    }} > Compose</button></li>

                    <li><NavLink className="fas fa-inbox" to='/email/inbox' onClick={() => {
                        eventBus.emit('change-folder', { txt: 'inbox' })
                    }}> Inbox</NavLink></li>

                    <li><NavLink className="fas fa-star" to='/email/starred' onClick={() => {
                        eventBus.emit('change-folder', { txt: 'starred' })
                    }} > Starred</NavLink></li>

                    <li><NavLink className="fas fa-paper-plane" to='/email/sent' onClick={() => {
                        eventBus.emit('change-folder', { txt: 'sent' })
                    }} > Sent Mail</NavLink></li>

                    <li><NavLink className="fab fa-firstdraft" to='/email/drafts' onClick={() => {
                        eventBus.emit('change-folder', { txt: 'drafts' })
                    }}> <b> Draft</b></NavLink></li>
                    <li ><StatusBar pc={this.state.pc} /></li>
                </ul>

            </section>
        )
    }
}
