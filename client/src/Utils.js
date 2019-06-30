//import React from "react";
// import namor from "namor";
import "./index.css";

// const range = len => {
//     const arr = [];
//     for (let i = 0; i < len; i++) {
//         arr.push(i);
//     }
//     return arr;
// };

// const newPerson = () => {
//     const statusChance = Math.random();
//     return {
//         firstName: namor.generate({ words: 1, numbers: 0 }),
//         account: namor.generate({ words: 1, numbers: 0 }),
//         channel: namor.generate({ words: 1, numbers: 0 }),
//         product: namor.generate({ words: 1, numbers: 0 }),
//         username: namor.generate({ words: 1, numbers: 3 }),
//         followers: Math.floor(Math.random() * 300000),
//         date: Math.floor(Math.random() * 30),
//         cpm: Math.floor(Math.random() * 30),
//         cpc: Math.floor(Math.random() * 100),
//         progress: Math.floor(Math.random() * 100),
//         status:
//             statusChance > 0.66
//                 ? "relationship"
//                 : statusChance > 0.33 ? "complicated" : "single"
//     };
// };

// export function makeData(len = 200) {
//     return range(len).map(d => {
//         return {
//             ...newPerson(),
//             children: range(10).map(newPerson)
//         };
//     });
// }

import axios from "axios";

export default {
  // Gets all books
  getInfluencers: function() {
      console.log ("get influencers")
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
  }
};
