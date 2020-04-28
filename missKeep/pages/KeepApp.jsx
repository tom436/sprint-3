const { Link } = ReactRouterDOM
import keepService from '../services/keepService.js'
import { KeepAdd } from '../cmps/KeepAdd.jsx'
import KeepList from '../cmps/KeepList.jsx'
// import KeepFilter from '../cmps/KeepFilter.jsx'

export class KeepApp extends React.Component {
    state = {
        keeps: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadKeeps()
        
    }
    loadKeeps() {
        keepService.query(this.state.filterBy)
            .then(keeps => {
                this.setState({ keeps })
            })
    }
    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, () => this.loadKeeps())
    // }
    onDelete = (keepId) => {
        keepService.remove(keepId)
        this.loadKeeps()
    }

    onChangeColor(props,bgc){
        keepService.changeColor(props,bgc)
        this.loadKeeps()
    }

    render() {
        const { keeps } = this.state
        return (
            !keeps ? 'Loading...' :
            <section className = 'main-content'>
               <KeepAdd keeps={keeps}/>
                <KeepList keeps={keeps} onDelete = {this.onDelete} colorChange={this.onChangeColor}/>
            </section>
        )
    }
}