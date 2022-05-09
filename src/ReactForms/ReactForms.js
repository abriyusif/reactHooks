import {useState} from 'react'

export default function ReactForm(){
    const [input, setInput]=useState('')
    const handleSearch =((event)=>{
        setInput(event.target.value)
        console.log(input);
        
    })
    const handleSubmit = ((event) =>  {
        event.preventDefault();
        alert(`hey my name is , ${input}`)
       })
    return(
        <>
        <h1>React Forms</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input id="search" type="text" placeholder="Search" onChange={handleSearch} value={input}>


            </input>
            <br></br>
            <button>Submit</button>
        </form>
        </>
    )
}