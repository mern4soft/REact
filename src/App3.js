import React, { useEffect } from 'react'

function App3() {

  useEffect(()=>{
    console.log('mounting... app3')
    return()=>{
      console.log('unmounting app3')
    }
  },[])
  return (
    <div>
       app 3
    </div>
  )
}

export default App3
