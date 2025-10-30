import { useState,useEffect } from 'react';
const URL ="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "14cdf9f7ddc94a748fbc3f33404c2050";
export default function Search( fooddata, setfooddata ){
  const [query,setQuery]=useState("pizzeria");
  useEffect(()=>{ async function Fetchfood(){
    const response = await fetch (`{$URL}?query=${query}&apiKey=API_KEY`);
    const data = await response.json();
    setfooddata=(data.results)
  }
    Fetchfood();
  },[query]);
  return(
    <div>
      <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text"></input>
    </div>
    ) 
}