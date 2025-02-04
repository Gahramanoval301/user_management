const apiKey = import.meta.env.VITE_API_KEY;
import axios from "axios"

export const getAllUsers = async ()=>{
    const res = await axios.get(apiKey + '/users')
    return res.data;
}

export const addUsers = async (values)=>{
    const res = await axios.post(apiKey + '/users/add', values, {
        headers: { 'Content-Type': 'application/json' },
        data: values,
    })
    return res.data;
} 

export const updateUsers = async (id, values)=>{
    const res = await axios.put( apiKey  + '/users/' + id, values, {
        headers: { 'Content-Type': 'application/json' },
        data: values,
    })
    return res.data;
}
export const deleteUsers = async (id)=>{
    const res = await axios.delete( apiKey + '/users/'+ id, {
        headers: { 'Content-Type': 'application/json' },
    })
    return res.data;
}