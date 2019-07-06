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

  //Data Import

  //get all items in database
  getInfluencers: function() {
  return axios.get("/api/twitter");
},
// Gets the book with the given id
getBook: function(id) {
  return axios.get("/api/books/" + id);
},
// Deletes the book with the given id
deleteBook: function(id) {
  return axios.delete("/api/books/" + id);
},
// Saves a book to the database
saveBook: function(bookData) {
  return axios.post("/api/books", bookData);
},
  // Twitter Database
  newCampaign: function(userData) {
    return axios.post("/api/twitter/campaign", userData);
  },

  newInfluencer: function(userData) {
    return axios.post("/api/twitter/influencer", userData);
  },
};
