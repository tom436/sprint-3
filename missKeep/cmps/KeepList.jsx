import utilService from '../services/utilService.js'
import { NoteImg } from 'NoteImg.jsx'
import { NoteTodos} from 'NoteTodos.jsx'
import { NoteTxt } from 'NoteTxt.jsx'

export default function KeepList(props) {
    const { keeps } = props
    return (
        <ul className="keep-list">
            {keeps.map(keep => {
                switch (keep.type) {
                    case 'NoteImg':
                        return <NoteImg key={keep.id} keep={keep} />
                    case 'NoteTodos':
                        return <NoteTodos key={keep.id} keep={keep} />
                    case 'NoteText':
                        return <NoteTxt key={keep.id} keep={keep} />
                    // case 'video':
                      break;
                  }
            })}
        </ul>
    )
}