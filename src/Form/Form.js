import './Form.css'
import { useState } from "react"
 function Form () {
    const styleH1 = {
        color: 'red',
        textAlign: 'center',
      

    }
    const [data, setData]=useState("")
    return (
        <div>
            <h1 style={styleH1}>here is my form</h1>
            <form>
                <input type="text" placeholder="Enter Your Name"
                onChange={(e)=>setData(e.target.value)}
                >

                </input>
            </form>
            <p>{data}</p>
        </div>
    )
}
export default Form
