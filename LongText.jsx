
export  class LongText extends React.Component {
    state={
        shortText:this.props.text.slice(0,100),
        moreLess:'more'

    }

    onToggleText=()=>{
        this.setState({
            moreLess:this.state.moreLess==='more'?'less':'more'
        })
    }

    render() {
        const{shortText,moreLess}=this.state
        const {text}=this.props
        return (
            <React.Fragment>
            <p>{moreLess==='more'&&shortText}</p>
            <p>{moreLess==='less'&&text}</p>
            <p onClick={this.onToggleText} className={`${moreLess}`}> {moreLess}...</p>
            </React.Fragment>
        )
    }
}