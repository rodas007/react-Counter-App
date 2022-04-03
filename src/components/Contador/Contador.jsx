

import { useState } from "react";
import './Contador.css'


export default function Contador({data}) {

let [Contador, setCounter] = useState(data);

console.log("Aquiiii" + setCounter );


  return (


    <div className="c-contador">



<button onClick={() => setCounter (Contador +1)}  className='c-contador__button' type="button">Sumar</button>
<button onClick={() => setCounter (Contador >0 ? Contador -1: Contador =0 ) } className='c-contador__button' type="button">Restar</button>
 <button onClick={() => setCounter (Contador =0)} className='c-contador__button' type="button">Reset</button>



 
     
      
 

 <div className="c-number">
{Contador}

<input type="number"  onChange={(e) => setCounter (e.target.value)}/>
          

</div>
  </div>



  )

  }

  
