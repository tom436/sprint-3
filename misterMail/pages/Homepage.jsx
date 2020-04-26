const { NavLink } = ReactRouterDOM



export default class HomePage extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }



    render() {
        return (
            <section className="home-page">
                
                <h1>Welcome to appsus</h1>
                <h3>your favorite app</h3>

            </section>
        )
    }
}
