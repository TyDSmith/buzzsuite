import axios from "axios";

export default {
  // Gets all user
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  // Local Login
  userSignup: function(userData) {
    console.log ("API userSignup")
    return axios.post("/auth/user/signup", userData);
  },
  userNameValidate: function(userData) {
    return axios.get("/auth/user/signup", userData)
  },
  userLogin: function(userData) {
    return axios.post("/auth/user/login", userData);
  },
  userSignout: function(userData) {
    return axios.post("/auth/user/signout", userData);
  },

};
