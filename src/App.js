import React, { useEffect, useState } from 'react'
import Cra from '../src/Componet/Card'
import Table from '../src/Componet/Table'

function App() {

  const [count,setCount] = useState(0)

  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')

  // const user = [
  //   {
  //     id:1,
  //     img:"data:image/jpeg;base64,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",
  //     name : "john doe",
  //     job:"web developer;"
  //   },
  //   {
  //     id:2,
  //     img:"data:image/jpeg;base64,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",
  //     name : "john doe",
  //     job:"web developer;"
  //   },
  //   {
  //     id:3,
  //     img:"data:image/jpeg;base64,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",
  //     name : "john doe",
  //     job:"web developer;"
  //   }
  
  // ]

  // function handleSubmit(e){
  //   e.preventDefault();
   
  //   console.log(name,email);
    
  // }

  useEffect(()=>{
    console.log("Mounting Phase");

    return()=>{
      console.log("unmounting Phase");
    }
    // console.log("updateing phase");
  },[])

  

  return (
    <div>


      <p>conter:{count}</p>
      <button onClick={()=>setCount(count+1)}> click</button>
      <Table/>
  
      {/* {
         user.map((item)=>(
          <Cra key={item.id} img={item.img} name={item.name} job={item.job}/>
        ))
      }


      <form onSubmit={handleSubmit}>
        Name:  <input  type='text' onChange={(e)=>setName(e.target.value)}/>
        email: <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
               <input type="submit"/>
      </form>  */}
    </div>
  )
}

export default App



