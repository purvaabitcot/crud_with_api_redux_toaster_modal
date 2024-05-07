import { getUsers } from "./reducers"
import axios from '../axiosConfig'
import { toast } from "react-toastify"

const getHeader = ()=>{
    return {
        headers : {
        "Content-Type" : 'application/json'
    }}
}

export const getAllUsers = () => async (dispatch)=>{
const response = await axios.get("/users", getHeader())
dispatch(getUsers(response.data))
}

export const getUserById = () => async ()=>{
    const response = await axios.get("/user/:id", getHeader())
    
}

export const addUsers = (form,toast,navi) => async (dispatch)=>{
    await axios.post("/user/add",form,getHeader()).then(()=>{
        dispatch(getAllUsers())
        toast.success("User Added Successfully");
        navi("/")
        })  
    // dispatch(addOneUsers(form))
    
}

export const deleteUserById = (id) => async (dispatch)=>{
    await axios.delete(`/user/delete/${id}`, getHeader()).then(()=>{
        dispatch(getAllUsers())
    })
    
    
}

export const updateUsers = (id,form) => async (dispatch)=>{
    debugger
    await axios.put(`/user/update/${id}`,form).then(()=>{
        dispatch(getAllUsers())
    })
}