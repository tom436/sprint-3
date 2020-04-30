
const { Link } = ReactRouterDOM

import { UserMsg } from "../../UserMsg.jsx"


export function Header() {
    return (
        <div className="main-header">
            <UserMsg />

            <Link to='/'><img src="./logo.png" alt=""></img></Link>
            <ul>
            <li><Link to='/email/inbox'>Mister Email</Link></li>
            <li><Link to='/MissKeep'>Miss Keep</Link></li>
            </ul>
        </div>
    )
}

