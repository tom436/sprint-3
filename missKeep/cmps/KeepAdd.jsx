

export class KeepAdd extends React.Component {

    state = {
        display: false,
        file: null
    };

    componentDidMount() {
        console.log(this.keeps);
    }



    inputKeyUp = (e) => {
        e.which = e.which || e.keyCode;
        if (e.which == 13) {
            this.addKeep(event.target.value)
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ [field]: value }))
    }

    handleImageChange = () => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
        this.handleClickExpand()
    }

    handleClickExpand = () => {

        this.setState(state => ({
            display: true
        }));

    }


    expandClose = () => {

        this.setState(state => ({
            display: false,
            file: null
        }));

        if (!this.state.title && !this.state.subject && !this.state.file) return
        this.props.onAddKeep(this.state.file, this.state.title, this.state.subject)
    }


    render() {
        // onKeyUp={this.inputKeyUp}
        if (!this.state.display) {
            return (
                <section className="txtAdd">
                    <input type="text" name="demo" onClick={this.handleClickExpand} placeholder="Take a note…" defaultValue="" />
                    <input
                        type="file"
                        id="upload-button"
                        name="img"
                        ref={(ref) => this.upload = ref}
                        style={{ display: "none" }}
                        onChange={(e) => this.handleImageChange(e.target.files)}
                    />
                    <button className="far fa-lg fa-image" onClick={(e) => this.upload.click()} value='image'></button>
                    <button className="fas fa-lg fa-list" onClick={() => { this.props.onAddKeep(event) }} value='list'></button>
                    <button className="fab fa-lg fa-youtube" onClick={() => { this.props.onAddKeep(event) }} value='video'></button>
                </section>
            )
        } else {
            return (
                <section className="txtAdd expand">
                    <img src={this.state.file} width="100%" />
                    <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                    <input type="text" name="subject" onChange={this.handleChange} id="textBottom" placeholder="Take a note…" />

                    <div id="textMenuContainer">
                        <input
                            type="file"
                            id="upload-button"
                            name="img"
                            ref={(ref) => this.upload = ref}
                            style={{ display: "none" }}
                            onChange={(e) => this.handleImageChange(e.target.files)}
                        />
                        <button className="far fa-lg fa-image" onClick={(e) => this.upload.click()} value='image'></button>
                        <button className="fas fa-lg fa-list" onClick={() => { this.props.onAddKeep(event) }} value='list'></button>
                        <button className="fab fa-lg fa-youtube" onClick={() => { this.props.onAddKeep(event) }} value='video'></button>
                        <button className="close-expand" onClick={this.expandClose}>Close</button>
                    </div>

                </section>
            )
        }

    }
}
