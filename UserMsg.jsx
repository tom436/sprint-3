import {eventBus} from "./misterMail/services/eventBusService.js"

export  class UserMsg extends React.Component {
    state={
        msg:null
    }
    

    componentDidMount() {
        this.unsubscribeFromEventBus =eventBus.on('show-msg',(msg)=>{
            this.setState({msg})

            setTimeout(()=>{
                this.setState({msg:null})          
            },2000)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }


    render() {
        const{msg}=this.state
        return (
            !msg?'':
            <section className="user-msg">
               {msg.txt}
            </section>
        )
    }
}