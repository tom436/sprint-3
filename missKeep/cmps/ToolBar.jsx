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
                <button style={{ backgroundColor: "#f28b82" }} onClick={() => props.colorChange(props, "#e0e0e0")}></button>
                <button style={{ backgroundColor: "#fbbc04" }}></button>
                <button style={{ backgroundColor: "#fff475" }}></button>
                <button style={{ backgroundColor: "#ccff90" }}></button>
                <button style={{ backgroundColor: "#a7ffeb" }}></button>
                <button style={{ backgroundColor: "#cbf0f8" }}></button>
                <button style={{ backgroundColor: "#aecbfa" }}></button>
                <button style={{ backgroundColor: "#d7aefb" }}></button>
                <button style={{ backgroundColor: "#fdcfe8" }}></button>
                <button style={{ backgroundColor: "#e6c9a8" }}></button>
                <button style={{ backgroundColor: "#e8eaed" }}></button>
            </div>
        </div>)
}