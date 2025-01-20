import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)

}
const create = (newObject) => {
    // console.log(newObject)
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
const deleteObject = (object_id) => {
    const request = axios.delete(`${baseUrl}/${object_id}`)
    return request.then(response => response.data)
}
const updateObject = (object_id,newObject) => {
    // console.log(`${baseUrl}/${object_id}`)
    const request = axios.put(`${baseUrl}/${object_id}`,newObject)
    return request.then(response => response.data)

}
export default{
    getAll,
    create,
    deleteObject,
    updateObject
}