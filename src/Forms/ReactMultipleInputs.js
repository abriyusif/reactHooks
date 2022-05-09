import {useState} from 'react'
function MultipleReactForm() {

    const [input, setInput] = useState({})

    const handleSearch = (e) => {
        const username = e.target.name
        const value = e.target.value
        e.preventDefault();
        setInput(values =>({...values, [username]:value}))
        console.log(``)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert(`hey my name is ${input.username} and my password is ${input.password}`)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="search">Username</label>
                <input type="text" id="search" placeholder="username"
                    name = "username"
                onChange={handleSearch} value ={input.username}
                />
                <br></br>
                <br></br>
            <label htmlFor="search">Password</label>
                <input type="password" id="search" placeholder="password"
                    name = "password"
                onChange={handleSearch} value ={input.password}
                />

                <br></br>
                <br></br>

                <button >Submit</button>
            </form>
        

            
        </div>
    )
}
export default MultipleReactForm;