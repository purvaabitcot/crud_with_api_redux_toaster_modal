import React, { useState } from "react";
import WebServices, { API } from "../WebServices/WebServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers, getAllUsers } from "../reduxStore/action";
import UserForm from "./UserForm";

const Add = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const defaultForm = {
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
    phoneNumber: "",
  };
  const [form, setForm] = useState(defaultForm);
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const HandleAddUser = async (e) => {
    e.preventDefault();
    if (
      form.name == "" ||
      form.email == "" ||
      form.password == "" ||
      form.city == "" ||
      form.state == "" ||
      form.country == " " ||
      form.occupation == "" ||
      form.phoneNumber == "" 
    ) {
      toast("All fields are mandatory to be filled");
    } else {
      // const res = await WebServices.postApiCall(API.postApi,form);
      // console.log(res);
      dispatch(addUsers(form, toast, navi));
    }
    e.target.reset();
  };

  const HandleClear = () => {
    setForm(defaultForm);
  };

  return (
    <div className="container">
      <div className="m-5 p-2">
        <h3 className="text-center text-info">Add Data Here!</h3>
       <UserForm handleFormSubmit={HandleAddUser} form={form} HandleChange={HandleChange} HandleClear={HandleClear}/>
      </div>
    </div>
  );
};

export default Add;
