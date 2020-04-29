
const { Link } = ReactRouterDOM



export  function Header() {
    return (
        <div className="main-header">
            <Link to='/'><img src="../logo.png" alt=""></img></Link>
            <ul>
            <li><Link to='/email/inbox'>Mister Email</Link></li>
            <li><Link to='/MissKeep'>Miss Keep</Link></li>
            <li> <Link to='/email/:folderName'>Miss Book</Link></li>
            </ul>
        </div>
    )
}

