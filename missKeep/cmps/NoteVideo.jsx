export function NoteVideo(props)  {
    const  NoteVideo  = props
    console.log(NoteVideo.keep);
    
    return (
        <article className="car-preview">
            <h1>{ NoteVideo.keep.info.title}</h1>
            <img src={ NoteVideo.keep.info.url } alt="" />
        </article>
    )
}