import axios from "axios";

export default {

  // Local Login
  userSignup: function(userData) {
    return axios.post("/auth/user/signup", userData);
  },
  userSignin: function(userData) {
    
    return axios.post("/auth/user/signin", userData);
  },
  userVerify: function(userData) {
    return axios.post("/auth/user/forgotpassword", userData);
  },
  forgotPassword: function (userData) {
    return axios.put("/auth/user/forgotpassword", userData);
  },

  // Twitter Database
  newCampaign: function(userData) {
    return axios.post("/api/twitter/campaign", userData);
  },

  

};
