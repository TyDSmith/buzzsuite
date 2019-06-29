import axios from "axios";

export default {


  // Local Login
  userSignup: function(userData) {
    console.log ("API userSignup")
    return axios.post("/auth/user/signup", userData);
  },
  userSignin: function(userData) {
    
    return axios.post("/auth/user/signin", userData);
  },
  userVerify: function(userData) {
    console.log (userData)
    return axios.post("/auth/user/forgotpassword", userData);
  },
  forgotPassword: function (userData) {
    return axios.put("/auth/user/forgotpassword", userData);
  }

};
