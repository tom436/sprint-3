import { NoteImg } from '../cmps/NoteImg.jsx'

export class KeepAdd extends React.Component {
    componentDidMount() {
        console.log('MOUNT');
    }
    
    onAddKeep(event){
        let type =  event.target.value
        
       
        switch (type) {
            case 'image':
               <NoteImg/>
              break;
            case 'list':
              break;
            case 'video':
              break;
          }
    }

    render() {
        return (
            <section className="txtAdd">
                <input type="text" placeholder="Take a note…"/>
                <button className="far fa-lg fa-image" onClick={() =>{this.onAddKeep(event)}} value='image'></button>
                <button className="fas fa-lg fa-list" onClick= {() =>{this.onAddKeep(event)}} value='list'></button>
                <button className="fab fa-lg fa-youtube" onClick={() =>{this.onAddKeep(event)}} value='video'></button>
            </section>
        )

    }
}