import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {   useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllUsers, updateUsers } from '../reduxStore/action';
import UserForm from './UserForm';


const Update = () => {
    const {id} = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {users} = useSelector(state=>state.userInfo);
    const defaultForm = {
        name : "",
        email : "",
        password : "",
        city : "",
        state : "",
        country : "",
        occupation : "",
        phoneNumber : ""
    }
    const[form,setForm] =useState(defaultForm);

    useEffect(()=>{
        if(users.length){
            const existingUser = users.find((item)=>item._id === id);
            if(existingUser){
                setForm({
                    ...form,
                    name : existingUser.name,
                    email : existingUser.email,
                    password : existingUser.password,
                    city: existingUser.city,
                    state: existingUser.state,
                    country: existingUser.country,
                    occupation: existingUser.occupation,
                    phoneNumber: existingUser.phoneNumber,
                })
            }  
        }
        else{
            dispatch(getAllUsers())
        }
      

    },[users])

    const Change = (e) =>{
        const {name,value} = e.target;
        setForm({...form,[name] : value})
    }


    const EditChange = async(e) =>{
        e.preventDefault();
        if(form.name === "" || form.email === "" || form.password === "" ||form.city === "" || form.country === " " || form.occupation === "" || form.phoneNumber === ""){
            toast.success("All fields are mandatory to be filled");
        }
        else{
            dispatch(updateUsers(id,form))
            //const res = await axios.put(`https://mern-admin-backend-jxw3.onrender.com/general/user/update/${user._id}`,form)
            //console.log(res);
            toast.success("User Updated Successfully")
            setForm(defaultForm)
            navigate("/")
        }
        
        e.target.reset();
        
    }

    return (
        <div className='container'>
            <div className='m-5 p-2'>
                
                <h3 className='text-center text-info'>Update Data Here!</h3>
               <UserForm handleFormSubmit={EditChange} HandleChange={Change} form={form}/>
            </div>
    
    
        </div>
      )
}

export default Update;