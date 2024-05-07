import React, { useEffect, useState } from 'react'
import customWebservices, { API } from '../WebServices/WebServices';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
// import { getData, updateData } from '../MyRedux/Slice';
import ConfirmModal from './Modal';
import { deleteUserById, deleteUsers, getAllUsers, updateUsers } from '../reduxStore/action';
import { updateData } from '../reduxStore/reducers';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState(null)
    const navi = useNavigate();

    const usersData = useSelector(state=>state.userInfo.users);
    
    const dispatch = useDispatch();

    const loadData = async() =>{
    //    const res = await customWebservices.getApiCall(API.getApi)
       dispatch(getAllUsers());
    }
    //for loadData on rendering page
    useEffect(()=>{
        loadData()
    },[])

    //for 
    const handleToggleModal = () => {
      setShowModal(!showModal);
    }

    const handleDelete = async(id) =>{
        handleToggleModal()
        setUserId(id)
    }

    const deleteUser = async()=>{
     
        dispatch(deleteUserById(userId))
        handleToggleModal()
    }

  return (
    <div className='container-fluid p-3'>
        <div>
                <Link className='btn btn-sm fw-bold bg-dark text-white p-2' to="/add">Add New User</Link>
        </div>
        <h3 className='text-center text-danger m-3'>{`Users Detail (${usersData?.length})`}</h3>
        
        <ConfirmModal showModal={showModal} handleToggleModal={handleToggleModal} deleteUser={deleteUser}/>
        <div className='table-responsive'>
            <table className='table table-striped table-hover bordered'>
                <thead className='text-center text-white'>
                    <tr>
                        <th className='bg-dark text-white'>S.No.</th>
                        <th className='bg-dark text-white'>Name</th>
                        <th className='bg-dark text-white'>Email</th>
                        <th className='bg-dark text-white'>Password</th>
                        <th className='bg-dark text-white'>City</th>
                        <th className='bg-dark text-white'>Country</th>
                        <th className='bg-dark text-white'>occupation</th>
                        <th className='bg-dark text-white'>phoneNumber</th>
                        <th className='bg-dark text-white'>Actions</th>
                        
                    </tr>
                </thead>
                <tbody className='text-center text-white'>
                    {usersData.length && usersData?.map((item,index)=>{
                        // debugger
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.city}</td>
                            <td>{item.country}</td>
                            <td>{item.occupation}</td>
                            <td>{item.phoneNumber}</td>
                            <td className='d-flex'><Link to={`/update/${item._id}`} className='btn btn-sm btn-success me-3'>Edit</Link><button className='btn btn-sm btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button></td>
                        </tr>)
                    })}
                    
                    
                </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Home;