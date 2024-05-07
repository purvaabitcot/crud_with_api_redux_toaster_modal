import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mern-admin-backend-jxw3.onrender.com/general',
  });

export default instance;