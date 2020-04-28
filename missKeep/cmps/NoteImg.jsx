import { ToolBar } from 'ToolBar.jsx'


export function NoteImg(props) {
    const NoteImg = props
    let bgc = (NoteImg.keep['style']) ?
        NoteImg.keep.style.backgroundColor : "#fff";

    return (
        <article style={{ backgroundColor: bgc }}>
            <h1>{NoteImg.keep.info.title}</h1>
            <img src={NoteImg.keep.info.url} alt="" />

            <ToolBar id={NoteImg.keep.id}
                onDelete={props.onDelete}
                colorChange={props.colorChange} />
        </article>
    )
}