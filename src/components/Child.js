import React from "react"

// destructiing 
function Child({name}){
  console.log(name.arr)
  return(
    <>hello you are:-{name.name}</>
  )
}


export default Child;