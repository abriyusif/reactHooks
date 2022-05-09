import {useState} from 'react'
function ReactForm() {

    const [input, setInput] = useState('')

    const handleSearch = (e) =>{
        e.preventDefault();
        setInput(e.target.value)
        console.log(input)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("Hello")
    }
    return (
        <div>
            <h1>React Form</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" placeholder="search"
                onChange={handleSearch} value ={input}
                />
                <button >Submit</button>
            </form>
        

            
        </div>
    )
}
export default ReactForm;