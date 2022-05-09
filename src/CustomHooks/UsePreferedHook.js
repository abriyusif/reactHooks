export default function UsePreferencedHook ({type, placeholder, value, onChange, onClick}) {
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          value= {value}
          onChange={onChange}
          onClick= {onClick}
         >
  
        </input>
   
      </>
    )
  }