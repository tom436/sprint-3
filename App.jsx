const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
// const { Link } = ReactRouterDOM
// const history = History.createBrowserHistory()

import {Header} from './misterMail/cmps/Header.jsx'
import {MisterEmail} from './misterMail/pages/MisterEmail.jsx';
import {HomePage} from './misterMail/pages/HomePage.jsx';
import {KeepApp} from './missKeep/pages/KeepApp.jsx';


export class App extends React.Component {

    render() {
        return (
            <Router >
                    <Header />
                    <Switch>
                        
                    <Route component={MisterEmail} path="/email/:folderName" />
                    <Route component={KeepApp} path="/missKeep"/>
                    <Route component={HomePage} path="/" />
                    </Switch >
                <main>
                </main>
                <footer>
                    coffeerights 2020 &copy;

                </footer>
            </Router>
        )
    }
}