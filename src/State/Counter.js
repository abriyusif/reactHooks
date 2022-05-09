import {useState , useEffect} from 'react'
export default function Counter () {
  const [data, setData] = useState("")
  return (
    <div>
  <input
  type="text" placeholder="enter my name" value={data} onChange={(event)=>{setData(event.target.value)}} width="100%">
  </input>,
  
    
    <p>
  {data} 
</p> </div>


  )}