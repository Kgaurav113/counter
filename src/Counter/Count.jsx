import React from 'react'




 function Count(){

const[Counter,Setcounter]=React.useState(0)
const hanleIncrement=(value)=>{
Setcounter(Counter+value);
}

const handledelete=(value)=>{
    Setcounter(Counter-value)
}

const double=(value)=>{
    Setcounter(Counter*2)
}

    return (
    
    <div style={{margin:"100px"}}>
<h1>Counter</h1>
<h1 style={{color:`${Counter%2===0?"green":"red"}`}}>{Counter}</h1>
<button onClick={()=>hanleIncrement(1)}>Add</button>
<button onClick={()=>handledelete(1)}>delete</button>
<button onClick={()=>double()}>doble</button>
</div>

    )
}



export default Count