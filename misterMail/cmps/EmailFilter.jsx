export class EmailFilter extends React.Component {
    state = {
        filter: {
            text: '',
            ReadUnread: null,
        }
    }
    handleChange = ({ target }) => {
        
        const field = target.name
        const value =  target.value
        // console.log(value);
        
        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }
    checkFilterEmpty = () => {
        if (this.state.filter.text != '') return false
        if (this.state.filter.ReadUnread != '') return false
        return true
    }
    onFilter = (ev) => {
        ev.preventDefault()
        if (!this.checkFilterEmpty) this.props.onSetFilter(this.state.filter)
    }
    render() {
        const { text } = this.state.filter
        return (
            <form className="email-filter" onSubmit={this.onFilter}>
                <input  type="text" name='text' value={text} onChange={this.handleChange} placeholder="Search:" />
                <select name="ReadUnread"  onChange={this.handleChange}>
                <option value="-">Read/Unread</option>
                    <option value="read">Read</option>
                    <option value="unread">Unread</option>

                </select>
            </form>
        )
    }
}