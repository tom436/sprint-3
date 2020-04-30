
const { Link } = ReactRouterDOM



export function Header() {
    return (
        <div className="main-header">
            <Link to='/'><img src="../logo.png" alt="" height="150" width="150"></img></Link>
            <ul>
                <li><Link to='/email/inbox'>Mister Email</Link></li>
                <li><Link to='/MissKeep'>Miss Keep</Link></li>
                <li> <Link to='/email/:folderName'>Miss Book</Link></li>
            </ul>
        </div>
    )
}

