const { Route, Switch } = ReactRouterDOM
import {LeftNav} from '../cmps/LeftNav.jsx'
import {Folders} from './Folders.jsx';
import {EmailDetails} from './EmailDetails.jsx';
import emailService from '../services/emailServices.js'
import {EmailCompose} from './EmailCompose.jsx';
export  class MisterEmail extends React.Component {
    state = {
    }

    onSendMail = (subject, name, body) => {
        if(!subject||!body) return
        emailService.sendEmail(subject, name, body)
            .then(()=> {
                this.setState({ sent:true })
           })
    }
    
    onSaveDraft = (subject, name, body) => {
        if(!subject||!body) return
        emailService.saveDraft(subject, name, body)
            .then(()=> {
                this.setState({ saved:true })
           })
    }

    render() {
        return (
                <section className="list-container">
                    <h1>{this.state.folder}</h1>
                    <LeftNav onChangeFolder={this.onChangeFolder} />
                    <EmailCompose onSendMail={this.onSendMail} onSaveDraft={this.onSaveDraft} />
                    <Switch>
                    <Route component={EmailDetails} exact path="/email/details/:theEmailId" />
                    <Route component={Folders} excat path="/email/:folderName" />
                    </Switch>
                </section>
        )
    }
}