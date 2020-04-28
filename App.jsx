const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { Link } = ReactRouterDOM

const history = History.createBrowserHistory()

import Header from 'misterMail/cmps/Header.jsx'
import MisterEmail from 'misterMail/pages/MisterEmail.jsx';
import Sent from 'misterMail/pages/Sent.jsx';

import HomePage from 'misterMail/pages/HomePage.jsx';
import MissKeep from 'MissKeep/pages/KeepApp.jsx';
import EmailDetails from 'misterMail/pages/EmailDetails.jsx';
import EmailCompose from 'misterMail/pages/EmailCompose.jsx';


export class App extends React.Component {

    render() {
        return (
            <Router >
                <header>
                <EmailCompose/>
                    <Header />
                    <Switch>
                    <Route component={EmailDetails} path="/Email/details/:theEmailId" />
                    <Route component={MisterEmail} path="/Email" />
                    <Route component={Sent} path="/sent" />

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