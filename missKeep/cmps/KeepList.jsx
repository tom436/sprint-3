import { NotePreview } from 'NotePreview.jsx'

export function KeepList(props) {
    const { keeps } = props

    

    return (
        <section className="keeps">
            {keeps.map(keep => {
                        return <div className='NoteImg' key={keep.id}> <NotePreview keep={keep} onDelete={props.onDelete} colorChange={props.colorChange} /> </div>
            })}
        </section>
    )
}