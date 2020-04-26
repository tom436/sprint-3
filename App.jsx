const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { Link } = ReactRouterDOM

const history = History.createBrowserHistory()
HomePage
import Header from 'misterMail/cmps/Header.jsx'
import MisterEmail from 'misterMail/pages/MisterEmail.jsx';
import HomePage from 'misterMail/pages/HomePage.jsx';
import MissKeep from 'MissKeep/pages/KeepApp.jsx';


export class App extends React.Component {

    render() {
        return (
            <Router >
                <header>
                    <Header />
                    <Switch>
                    <Route component={MisterEmail} path="/Email" />
                    <Route component={MissKeep} path="/MissKeep"/>

                    <Route component={HomePage} path="/" />

                    </Switch >
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