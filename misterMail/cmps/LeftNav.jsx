const { NavLink } = ReactRouterDOM



export default class LeftNav extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }



    render() {
        return (
            <section className="left-nav">
                <ul>
                    <li><NavLink className="fas fa-plus compose" exact to='/'> Compose</NavLink></li>
                    <li><NavLink  className="fas fa-inbox"  to='/emails'> Inbox</NavLink></li>
                    <li><NavLink className="fas fa-star" to='/'> Starred</NavLink></li>
                    <li><NavLink className="fas fa-paper-plane" to='/'> Sent Mail</NavLink></li>
                    <li><NavLink className="fab fa-firstdraft" to='/'> Draft</NavLink></li>

                </ul>
            </section>
        )
    }
}
