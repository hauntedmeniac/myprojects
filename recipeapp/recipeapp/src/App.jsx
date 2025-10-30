import '/src/App.css';
import useState from 'react';
import Search from './Components/Search';
function App(){
  const [fooddata,setfooddata]= useState([]);
  return (
      <div>
    <Search fooddata={fooddata} setfooddata={setfooddata}></Search>
    {fooddata.map((food)=>(<h1>{food.title}</h1>))}
      </div>
  )
}
export default App;
