const { Link } = ReactRouterDOM
// import React, { Component } from 'react';
import keepService from '../services/keepService.js'
import { KeepAdd } from '../cmps/KeepAdd.jsx'
import { NoteImg } from '../cmps/NoteImg.jsx'
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
       
    render() {
        const { keeps } = this.state
        return (
            !keeps ? 'Loading...' :
            <section>
                {<KeepAdd />}
                <KeepList keeps={keeps} />
            </section>
        )
    }
}