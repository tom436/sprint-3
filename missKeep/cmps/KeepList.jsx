import { NoteImg } from 'NoteImg.jsx'
import { NoteTodos } from 'NoteTodos.jsx'
import { NoteTxt } from 'NoteTxt.jsx'

export default function KeepList(props) {
    const { keeps } = props
    return (
        <section className="keeps">
            {keeps.map(keep => {
                switch (keep.type) {
                    case 'NoteImg':
                        return <div className='NoteImg' key={keep.id}> <NoteImg keep={keep} onDelete = {props.onDelete} colorChange={props.colorChange}/> </div>
                    case 'NoteTodos':
                        return <div className='NoteTodo' key={keep.id}> <NoteTodos  keep={keep} onDelete = {props.onDelete} colorChange={props.colorChange}/></div>
                    case 'NoteText':
                        return <div className='NoteTxt' key={keep.id}> <NoteTxt keep={keep} onDelete = {props.onDelete}/></div>
                        // case 'video':
                        break;
                }
            })}
        </section>
    )
}