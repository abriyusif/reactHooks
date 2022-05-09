import Form from '../Form/Form.js' 
  export default function Name () {
    const myName={
        fname:'shukri' ,
        lname:'ibrahim'
       }
    return (
      
        
      <>
      
      <h3>This is how to do  a prop</h3>
        <p>Hello my name is {myName.fname} {myName.lname} </p>
      </>
    )

  }