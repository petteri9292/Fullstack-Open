import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id:1, number: "040-1234567"}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")


  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const new_name = {
      name : newName,
      id : persons.length + 1,
      number : newNumber
    }
    const temp_name_array = persons.map(person => person.name)
    // console.log(temp_name_array)
    if (temp_name_array.includes(new_name.name)){
      alert(`${newName} is already added to phonebook`)
    } else {
    setPersons(persons.concat(new_name))
    setNewName("")
    setNewNumber("")
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange} value = {newName}/>
        </div>
        <div>number: <input onChange={handleNumberChange} value = {newNumber}></input></div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      <h2>Numbers</h2>
        {persons.map(person => <div key = {person.id}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App