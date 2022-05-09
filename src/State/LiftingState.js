export default function SearchWithProps({onSearch, value}){
    return(
        <div>
            <lable htmlFor="search">search input with lifted state</lable>
            <input
                type="text"
                placeholder="search with state"
                onChange = {onSearch}
                value={value}
                >
            </input>
        </div>
    )
}