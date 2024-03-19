const mongoose = require('mongoose');

// Establish connection
main().then( () => {
    console.log("Connection Successfully")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Create schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    }
});

// Create collections

const Book = new mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "mathematics",
  author: "RD Sharma",
  price: 1200
});

book1.save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });