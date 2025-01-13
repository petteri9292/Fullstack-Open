import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id:1}
  ]) 
  const [newName, setNewName] = useState('')


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const new_name = {
      name : newName,
      id : persons.length + 1
    }
    setPersons(persons.concat(new_name))
    setNewName("")
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNoteChange} value = {newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <div key = {person.id}>{person.name}</div>)}
    </div>
  )
}

export default App