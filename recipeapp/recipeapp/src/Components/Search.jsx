import { useState,useEffect } from 'react'
export default function Search(){
  const [query,setQuery]=useState("pizzeria")
  useEffect(()=>{Function Demo(){}
    Demo()
  },[query])
  return(
    <div>
      <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text"></input>
    </div>
    ) 
}