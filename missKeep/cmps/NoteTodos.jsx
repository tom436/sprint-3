import utilService from '../services/utilService.js'


export function NoteTodos(props) {
    const NoteTodos = props

    for (let i = 0; i < NoteTodos.keep.info.todos.length; i++) {
        const timeStamp = NoteTodos.keep.info.todos[i].doneAt;
        const time = utilService.getTime(timeStamp)
        console.log(time);
    }

    return (
        <div>
            <ol>
                {NoteTodos.map(todo => {
                    return <li>{todo.todos.txt}</li>
                })}
            </ol>

        </div>
    )
}