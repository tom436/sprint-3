
const { Link } = ReactRouterDOM


// import MisterEmail from '../pages/MisterEmail.jsx';
// import HomePage from '../pages/HomePage.jsx';
// import MissKeep from '../pages/KeepApp.jsx';

export default function EmailList() {
    return (
        <div className="main-header">
            <h2>Apps Place</h2>
            <input  type="text" placeholder='Search mail '/>
            <button className="fa fa-search search-icon"></button>
            <ul>
            <Link to='/Email'>Mister Email</Link>
            <Link to='/MissKeep'>Miss Keep</Link>
            <Link to='/Email'>Miss Book</Link>
            <Link to='/'>Home</Link>

            </ul>
        </div>
    )
}

