import { useState } from "react";

function App() {
  const [count,setcount]=useState(0)

const increment=()=>{
 // setcount(count+1)
  //console.log(count);
  if(count<10){
  setcount(count+1)
}
else{
  setcount(count)
}
}
const reset=()=>{
  setcount(0)
  //console.log(count);
}
const decrement=()=>{
  if(count>1){
    setcount(count-1)
  }
  else
  {
    setcount(count)
  }
}

  return (
    <div className="bg-black min-h-screen flex justify-center items-center flex-col">
   
   <div>
      <span className="bg-yellow-500 rounded-full px-2 ml-18">{count}</span>
    </div>
    <div className="flex gap-4 mt-2">
    <button className="bg-blue-500 px-4 py-2 rounded-2xl" onClick={increment}>+</button>
    <button className="bg-blue-500 px-4 py-2 rounded-2xl" onClick={reset}>reset</button>
    <button className="bg-blue-500 px-4 py-2 rounded-2xl" onClick={decrement}>-</button>
    </div>  
    
    </div>
  );
}

export default App;