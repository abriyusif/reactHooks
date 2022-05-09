import React from 'react';
function ReactInputs() {

    const handleSelect = (selector) => {
        selector.preventDefault();
    }

    const countries = ["Kenya", "Uganda","Tanzania", "Rwanda", "Burundi", "Somalia", "Ethiopia", "South Sudan", "Sudan", "DR Congo"]
        
    
    return (
        <>
            <form>
            <label htmlFor="name">Electronics</label>

            <br></br>
                <br></br>

            <input type="text" name="name" id="name" placeholder="Location" required
                onChange={handleSelect}
            />

<br></br>
                <br></br>

            <label htmlFor="electonics">Electonics</label>

            <br></br>
                <br></br>
            <select>

            
            <option />
            {countries.map((country) => (
            <option key={country} value={country}>
                {country}
            </option>
            
            ))}

                </select>
                
                </form>
        </>
    );
}
export default ReactInputs;