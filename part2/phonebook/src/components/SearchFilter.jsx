const SearchFilter = ({handleSearchChange}) => {    
    return (<form>
        <div>
        filter shown with <input onChange={handleSearchChange}></input>
        </div>

    </form>
    )    
}

export default SearchFilter