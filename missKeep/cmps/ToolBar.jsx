// import KeepApp from '../pages/KeepApp.jsx'

export function ToolBar(props) {
    // function noteImg(props) {
    //     return (
    //         <h1>{props.keep.info.title}</h1>
    //         <img src={props.keep.info.url} alt="" />
    //     )
    // }
    return (
        <div>
            {/* {noteImg(props)} */}
            <button className="fas fa-palette"></button>
            <button className="fas fa-trash-alt" onClick={() => props.onDelete(props)}></button>
            <div className="colorBar">
                <button style={{ backgroundColor: "#e0e0e0" }} onClick={() => props.colorChange(props, "#e0e0e0")}></button>
                <button style={{ backgroundColor: "#f28b82" }} onClick={() => props.colorChange(props, "#f28b82")}></button>
                <button style={{ backgroundColor: "#fbbc04" }} onClick={() => props.colorChange(props, "#fbbc04")} ></button>
                <button style={{ backgroundColor: "#fff475" }} onClick={() => props.colorChange(props, "#fff475")}></button>
                <button style={{ backgroundColor: "#ccff90" }} onClick={() => props.colorChange(props, "#ccff90")}></button>
                <button style={{ backgroundColor: "#a7ffeb" }} onClick={() => props.colorChange(props, "#a7ffeb")}></button>
                <button style={{ backgroundColor: "#cbf0f8" }} onClick={() => props.colorChange(props, "#cbf0f8")}></button>
                <button style={{ backgroundColor: "#aecbfa" }} onClick={() => props.colorChange(props, "#aecbfa")}></button>
                <button style={{ backgroundColor: "#d7aefb" }} onClick={() => props.colorChange(props, "#d7aefb")}></button>
                <button style={{ backgroundColor: "#fdcfe8" }} onClick={() => props.colorChange(props, "#fdcfe8")}></button>
                <button style={{ backgroundColor: "#e6c9a8" }} onClick={() => props.colorChange(props, "#e6c9a8")}></button>
                <button style={{ backgroundColor: "#e8eaed" }} onClick={() => props.colorChange(props, "#e8eaed")}></button>
            </div>
        </div>)
}