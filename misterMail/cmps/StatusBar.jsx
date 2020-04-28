



export  function StatusBar(props) {


    const pc=props.pc;
    return (
        <div className="bar-container">
    <div style={{width: `${pc}%`}} className="status-bar">{pc}%</div>
    </div>
    )
}

// 8<button  class="fas fa-trash-alt"></button>