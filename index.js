const mongoose = require('mongoose');

// Establish connection
main().then( () => {
    console.log("Connection Successfully")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Create schema
const userSchema = new mongoose.Schema( {
    name: String,
    email: String,
    age: Number
} );

// Create collections

const User = new mongoose.model("User", userSchema);
// const Employee = new mongoose.model("Employee", userSchema);

// Insert one data at a time
// const user1 = new User( {
//   name: "Ahsan",
//   email: "demo@gmail.com",
//   age: 22,
// } );

// user1.save()
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });

// const user2 = new User( {
//   name: "Ansari",
//   email: "example@gmail.com",
//   age: 23,
// } );

// user2.save()
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// Insert multiple data at a time

// User.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age: 45},
//   {name: "John", email: "john@gmail.com", age: 50},
//   {name: "Doe", email: "doe@gmail.com", age: 40}
// ]).then((res) => {
//   console.log(res);
// });

// Find 

// User.find({age: { $gt: 19 } })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

// Update only one

// User.updateOne({ name: "Ahsan" }, { age: 20 })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

// Update many

// User.updateMany({ name: "Ahsan" }, { age: 20 })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

// Delete only one

// User.deleteOne({ name: "Ahsan" })
//   .then((res) => {
//     console.log(res);
//   }).catch((err) => {
//     console.log(err);
//   });

// Delete many

// User.deleteMany({ age: { $gt: 19 }})
// .then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });