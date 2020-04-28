import utilService from '../services/utilService.js'

export function TodoPreview(props) {
    const {todo} = props
    const timeStamp = todo.doneAt;
    const time = utilService.getTime(timeStamp)
    const check = <input type="checkbox"/>;
    
    return (
    <li> {check}
    <span className ='todoTxt'>{todo.txt}</span> 
    <span className ='todoTime'>{time}</span></li>
    )
}