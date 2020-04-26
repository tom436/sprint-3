
const { Link } = ReactRouterDOM


// import MisterEmail from '../pages/MisterEmail.jsx';
// import HomePage from '../pages/HomePage.jsx';
// import MissKeep from '../pages/KeepApp.jsx';

export default function EmailList() {
    return (
        <div className="main-header">
            <h2>Apps Place</h2>
            <input  type="text" placeholder='Search mail '/>
            <ul>
            <li><Link to='/Email'>Mister Email</Link></li>
            <li><Link to='/MissKeep'>Miss Keep</Link></li>
            <li> <Link to='/Email'>Miss Book</Link></li>
            <li><Link to='/'>Home</Link></li>

            </ul>
        </div>
    )
}

