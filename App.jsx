const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { Link } = ReactRouterDOM

const history = History.createBrowserHistory()

import Header from 'misterMail/cmps/Header.jsx'
import MisterEmail from 'misterMail/pages/MisterEmail.jsx';
import HomePage from 'misterMail/pages/HomePage.jsx';
import MissKeep from 'MissKeep/pages/KeepApp.jsx';
import EmailDetails from 'misterMail/pages/EmailDetails.jsx';


export class App extends React.Component {

    render() {
        return (
            <Router >
                <header>
                    <Header />
                    <Switch>
                    <Route component={EmailDetails} path="/Email/:theBookId" />
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