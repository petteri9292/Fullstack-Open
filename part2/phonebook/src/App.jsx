import { useState, useEffect } from 'react'
import axios from "axios"

import numberService from "./services/numbers.jsx"
import Render from "./components/Render.jsx"
import AddName from "./components/AddName"
import SearchFilter from './components/SearchFilter.jsx'

const App = () => {
  const [persons,setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")


  const hook = () => {
    numberService.getAll().then(data => {
      setPersons(data)
    })
  }


  useEffect(hook,[])

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)){
      numberService.deleteObject(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const addName = (event) => {
    event.preventDefault()
    const new_name = {
      name : newName,
      number : newNumber
    }
    const temp_name_array = persons.map(person => person.name)
    if (temp_name_array.includes(new_name.name)){
      if (window.confirm(`${new_name.name} is already added to phonebook, replace the old number with a new one?`)){
        const object_id = persons.find((person) => person.name === new_name.name).id
        numberService.updateObject(object_id,new_name).then(response => {
          console.log(response)
          setPersons(persons.map(person => person.id === object_id ? response : person))
        })
      }
    } else {
      setNewName("")
      setNewNumber("")

      numberService.create(new_name).then(data => {
        const updated_persons = persons.concat(data)

        setPersons(updated_persons)
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
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
      <Render persons={persons} searchTerm={searchTerm} onDelete={handleDelete}></Render>
    </div>
  )
}



export default App