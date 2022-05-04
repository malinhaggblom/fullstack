import React from 'react'
import axios from 'axios'
const link = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(link)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(link, newObject)
  return request.then(response => response.data)
}

const remove = (objectid) => {
  const request = axios.delete(link+`/`+objectid.toString())
  return request.then(response => response)
}
const replace = (newobject) => {
  const request = axios.put(link+`/`+newobject.id,newobject)
  return request.then(response => response.data)
}

export default { getAll, create, remove, replace }