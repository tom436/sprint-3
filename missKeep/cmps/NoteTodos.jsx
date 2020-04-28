import utilService from '../services/utilService.js'
import { TodoPreview } from 'TodoPreview.jsx'

export function NoteTodos(props) {
    const NoteTodos = props
    let bgc = (NoteTodos.keep['style']) ?
        NoteTodos.keep.style.backgroundColor : "#fff";
    return (
        <div style={{ backgroundColor: bgc }}>

            <ol>
                {NoteTodos.keep.info.todos.map((todo, idx) => {
                    return <TodoPreview key={idx} todo={todo} />
                })}
            </ol>

            {/* <ToolBar id={NoteTodos.keep.id}
                onDelete={props.onDelete}
                colorChange={props.colorChange} /> */}
        </div>
    )
}