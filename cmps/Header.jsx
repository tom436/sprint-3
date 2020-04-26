
const { Link } = ReactRouterDOM




export default function EmailList() {
    return (
        <div className="main-header">
            <h2>Apps Place</h2>
            <input  type="text" placeholder='Search mail '/>
            <button className="fa fa-search search-icon"></button>
            <ul>
            <Link to='/Email'>Mister Email</Link>
            <Link to='/Email'>Miss Keep</Link>
            <Link to='/Email'>Miss Book</Link>
            </ul>
        </div>
    )
}

