import { ToolBar } from 'ToolBar.jsx'
import {KeepAdd} from './KeepAdd.jsx'

export function NotePreview(props) {
    const Note = props
    let bgc = (Note.keep['style']) ?
        Note.keep.style.backgroundColor : "#fff";

    return (
        <div style={{ backgroundColor: bgc }}>
            {/* {imageClass.imag()} */}
            <h1>{Note.keep.info.title}</h1>
            <p>{Note.keep.info.txt}</p>
            < ToolBar id={props.keep.id}
                onDelete={props.onDelete}
                colorChange={props.colorChange} />
        </div>
    )
}