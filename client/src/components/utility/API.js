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
  userSignout: function(userData) {
    return axios.post("/auth/user/signout", userData);
  },

};
