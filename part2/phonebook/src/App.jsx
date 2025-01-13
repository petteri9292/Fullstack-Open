import { useState } from 'react'


import Render from "./components/Render.jsx"
import AddName from "./components/AddName"
import SearchFilter from './components/SearchFilter.jsx'

const App = () => {
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas' , id:1, number: "040-1234567"}
  // ]) 
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
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
      <SearchFilter handleSearchChange={handleSearchChange}></SearchFilter>
      <h2>add a new</h2>
      <AddName addName={addName} handleNameChange={handleNameChange} newName={newName}
        handleNumberChange={handleNumberChange} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Render persons={persons} searchTerm={searchTerm}></Render>
    </div>
  )
}



export default App