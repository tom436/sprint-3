export function NoteImg(props)  {
    const  NoteImg  = props
    
    return (
        <article className="car-preview">
            <h1>{ NoteImg.keep.info.title}</h1>
            <img src={ NoteImg.keep.info.url } alt="" />
        </article>
    )
}