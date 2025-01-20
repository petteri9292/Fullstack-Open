const Render = ({persons, searchTerm, onDelete}) => { 
    return (<>{persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((person) => (
      <div key={person.id}>
        {person.name} {person.number}
        <button onClick={() => onDelete(person.id,person.name)}>Delete me</button>
      </div>
    ))}</>)
}

export default Render