import React from 'react'

const UserForm = ({form,HandleChange,handleFormSubmit,HandleClear}) => {


  return (
    <div className="m-3 p-3 rounded shadow">
    <form onSubmit={handleFormSubmit}>
      <div className="form-group m-3">
        <lable className="fw-bold text-success">Enter Name : </lable>
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control"
          name="name"
          value={form.name}
          onChange={HandleChange}
        />
      </div>
      <div className="form-group m-3">
        <lable className="fw-bold text-success">Enter Email : </lable>
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control"
          name="email"
          value={form.email}
          onChange={HandleChange}
        />
      </div>
      <div className="form-group m-3">
        <lable className="fw-bold text-success"> Enter Password : </lable>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          className="form-control"
          name="password"
          value={form.password}
          onChange={HandleChange}
        />
      </div>
      <div className="form-group m-3">
        <lable className="fw-bold text-success">Enter City : </lable>
        <br />
        <input
          type="text"
          placeholder="Enter City"
          className="form-control"
          name="city"
          value={form.city}
          onChange={HandleChange}
        />
      </div>
      <div className="form-group m-3">
        <lable className="fw-bold text-success">Enter State : </lable>
        <br />
        <input
          type="text"
          placeholder="Enter State"
          className="form-control"
          name="state"
          value={form.state}
          onChange={HandleChange}
        />
      </div>
      <div className="form-group m-3">
        <lable className="fw-bold text-success">Enter Country : </lable>
        <br />
        <input
          type="text"
          placeholder="Enter Country"
          className="form-control"
          name="country"
          value={form.country}
          onChange={HandleChange}
        />
      </div>
      <div className="form-group m-3">
        <lable className="fw-bold text-success">
          Enter Occupation :{" "}
        </lable>
        <br />
        <input
          type="text"
          placeholder="Enter Occupation"
          className="form-control"
          name="occupation"
          value={form.occupation}
          onChange={HandleChange}
        />
      </div>
      <div className="form-group m-3">
        <lable className="fw-bold text-success">
          Enter Phone-Number :{" "}
        </lable>
        <br />
        <input
          type="number"
          placeholder="Enter Phone Numer"
          className="form-control"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={HandleChange}
        />
      </div>
      <div className="form-group m-3 d-flex justify-content-center">
        <button
          type="submit"
          className="form-control w-50 bg-info text-white fw-bold"
        > Save </button>
       { HandleClear && <button
          type="button"
          className="btn btn-success w-50 text-white fw-bold ms-3"
          onClick={HandleClear}
        >Reset</button>}
      </div>
    </form>
  </div>
  )
}

export default UserForm