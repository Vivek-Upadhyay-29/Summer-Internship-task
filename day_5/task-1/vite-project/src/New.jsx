import React from 'react'

function New() {
  return (
    <div><h1>
        
        This is inside new Component :) hehe!!

        </h1>
        
        </div>
  )
}

function New2(){
    return(

        <>

        This is inside New2
        
        </>
    )
}

export const New3=()=>{
    return(

        <>
        <New/>
        <New2/>
        This is New3
        
        </>
    )
}


export default New;
