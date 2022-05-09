import {useState} from 'react'

export default function ReactMultipleInput(){
    const [input, setInput]=useState({})
    const handleSearch =((event)=>{
        setInput(event.target.value)
        console.log(input);
        
    })
    const handleSubmit = ((event) =>  {
        event.preventDefault();
        alert(`hey my name is , ${input}`)
       })
       const submit=((e)=>{
           e.preventDefault();
           alert(`hey my name is, ${input}`)
       })
     

    return(
        <>
        <h1>React Forms</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="search">Login</label>
            <input id="search" type="text" placeholder="username" name="username" onChange={handleSearch} value={input.username}>


            </input>
            <br></br>
            <input id="search" type="text" placeholder="password" name="password" onChange={handleSearch} value={input.password}></input>
            <button>Submit</button>
        </form>
        </>
    )
}