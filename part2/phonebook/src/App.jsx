import { useState, useEffect } from 'react'
import axios from "axios"


import Render from "./components/Render.jsx"
import AddName from "./components/AddName"
import SearchFilter from './components/SearchFilter.jsx'

const App = () => {
  const [persons,setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")


  const hook = () => {
    axios.get("http://localhost:3001/persons")
    .then(response => {
      console.log(response.data)
      setPersons(response.data)
    })


  }

  useEffect(hook,[])

  const addName = (event) => {
    event.preventDefault()
    const new_name = {
      name : newName,
      number : newNumber
    }
    const temp_name_array = persons.map(person => person.name)
    if (temp_name_array.includes(new_name.name)){
      alert(`${newName} is already added to phonebook`)
    } else {
      setNewName("")
      setNewNumber("")
      axios
        .post('http://localhost:3001/persons', new_name)
        .then(response => {
          const updated_persons = persons.concat(response.data)

          setPersons(updated_persons)
        })

      }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value)
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