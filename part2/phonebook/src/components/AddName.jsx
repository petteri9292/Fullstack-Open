const AddName = ({addName,handleNameChange,newName,handleNumberChange,newNumber}) => {
    return (
        <form onSubmit={addName}>
        <div>
        name: <input onChange={handleNameChange} value = {newName}/>
        </div>
        <div>number: <input onChange={handleNumberChange} value = {newNumber}></input></div>
        <div>
        <button type="submit">add</button>
        </div>
    
        </form>
    )
}

export default AddName