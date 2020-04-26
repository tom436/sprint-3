const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { Link } = ReactRouterDOM

const history = History.createBrowserHistory()
HomePage
import Header from './cmps/Header.jsx'
import MisterEmail from './pages/MisterEmail.jsx';
import HomePage from './pages/HomePage.jsx';


export class App extends React.Component {

    render() {
        return (
            <Router >
                <header>
                    <Header />
                    <Switch>
                        <Route component={HomePage} path="/" />

                        <Route component={MisterEmail} path="/Email" />

                    </Switch>
                </header>
                <main>
                </main>
                <footer>
                    coffeerights 2020 &copy;

                </footer>
            </Router>
        )
    }
}