const { NavLink } = ReactRouterDOM

import emailService from '../services/emailServices.js'
import {eventBus} from "../services/eventBusService.js"

import {StatusBar} from './StatusBar.jsx'

export  class LeftNav extends React.Component {
    state = {
        pc: 0
    }

    componentDidMount() {
        emailService.howManyRead()
            .then(pc => {

                this.setState({ pc })
            })
    }

    render() {
        return (
            <section className="left-nav">
                <ul>
                    <li><button className="fas fa-plus compose" onClick={()=>{
                        eventBus.emit('change-display', { txt: 'sent' })
                    }} > Compose</button></li>
                    <li><NavLink className="fas fa-inbox" to='/email/inbox'> Inbox</NavLink></li>
                    <li><NavLink className="fas fa-star" to='/'> Starred</NavLink></li>
                    <li><NavLink className="fas fa-paper-plane" to='/email/sent'> Sent Mail</NavLink></li>
                    <li><NavLink className="fab fa-firstdraft" to='/'> <b> Draft</b></NavLink></li>
                    <li ><StatusBar pc={this.state.pc} /></li>
                </ul>

            </section>
        )
    }
}
