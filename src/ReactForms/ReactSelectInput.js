export default function ReactSelectInput(){
    return(
        <>
        <Form>
            <label htmlFor="name">Electronics</label>
            <input type="text" name="name"id="name"placeholder="enter name" onChange={handleSelect}>

            </input>
            <label htmlFor="email">electronics</label>
            <select>
                <option value="">select</option>
            </select>

        </Form>
        </>
    )
}