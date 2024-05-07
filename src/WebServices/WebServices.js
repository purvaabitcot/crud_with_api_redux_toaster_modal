import axios from "axios";

class customWebservices{
    getApiCall(url){
        return axios.get(url)
    }
    postApiCall(url,data){
        return axios.post(url,data,{
            headers : {
                'Content-Type' : 'application/json'
            }
        })
    }
    deleteApiCall(url){
        return axios.delete(url)
    }
    putApiCall(url,data){
        return axios.put(url,data,{
            headers : {
                "Content-Type" : 'application/json'
            }
        })
    }
}

export const API = {
    getApi : "https://mern-admin-backend-jxw3.onrender.com/general/users",
    postApi : "https://mern-admin-backend-jxw3.onrender.com/general/user/add",
    deleteApi : "https://mern-admin-backend-jxw3.onrender.com/general/user/delete/:id",
    
}



export default new customWebservices();