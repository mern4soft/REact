import React, { useEffect } from 'react'

function App4() {

  useEffect(()=>{
    console.log('mounting... app 4')
    return()=>{
      console.log('unmounting app4')
    }
  },[])
  return (
    <div>
      app 4
    </div>
  )
}

export default App4
