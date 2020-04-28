const {  Link } = ReactRouterDOM
import { eventBus } from "../services/eventBusService.js"



export  class EmailCompose extends React.Component {
    state = {
        min: '',
        max: 'min',
        open:'hide'

    }



    componentDidMount() {
        this.unsubscribeFromEventBus= eventBus.on('change-display', () => {
            this.state.open === 'hide' ? this.setState({ open: 'show' }) : this.setState({ open: 'hide' })
        })

    }
    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ [field]: value }))
    }
    onSendMail = (ev) => {
        ev.preventDefault()
        this.props.onSendMail(this.state.subject, 'Tom', this.state.body)
            this.setState({
                open: 'hide'
            })

    }



    render() {
        const { open } = this.state
        return (
            <section >
                <div className={` compose-container ${open}`}>
                    <div className="compose-header">
                        New Massage
                        <Link className="fas fa-times exit" to="/email"></Link>
                        <Link className="fas fa-expand-alt exit" to="/email"></Link>
                        <button className={`${this.state.min} fas fa-window-minimize`} onClick={() => {
                            this.setState({ min: 'min', max: '' })
                        }}></button>
                        <button className={`${this.state.max} fas fa-plus `} onClick={() => {
                            this.setState({ min: '', max: 'min' })
                        }}></button>
                    </div>
                    <div>
                        <form onSubmit={this.onSendMail} className={`${this.state.min} compose-body`}>
                            <input type="text" name="recipients" placeholder="Recipients:" onChange={this.handleChange} />
                            <input type="text" name="subject" placeholder="Subject:" onChange={this.handleChange} />
                            <textarea id="body" type="text" name='body' rows="20" cols="30" onChange={this.handleChange} />
                            <div className="button-container">
                                <button className="send-btn" onClick={() =>
                                    this.setState({ min: '', max: 'min' })
                                }>Send</button>
                                <button className="fas fa-paperclip"></button>
                                <button className="fas fa-font"></button>
                                <button className="far fa-smile-beam"></button>
                                <button className="fas fa-trash-alt " ></button>
                            </div>
                        </form>
                    </div>

                </div>

            </section>
        )
    }
}
