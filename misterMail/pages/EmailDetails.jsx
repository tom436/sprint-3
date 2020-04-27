const { Link } = ReactRouterDOM
import LeftNav from '../cmps/LeftNav.jsx'


import EmailList from '../cmps/EmailList.jsx'
import emailService from '../services/emailServices.js'

export default class EmailApp extends React.Component {
    state = {

    }


    
    componentDidMount(){

        const id = this.props.match.params.theBookId
        console.log(id);
        emailService.getById(id).then(email=>{console.log(email)
            this.setState({email})
        })
    
    }



    render() {
        const { email } = this.state
        return (
            !email ? 'Loading...' : <section>
                     <LeftNav />
                     <div  className="email-body">
gdfgfdg
                     </div>

                </section>
        )
    }
}