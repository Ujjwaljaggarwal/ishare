const mongoose = require('mongoose');
const mongoURI="mongodb+srv://ujjwal:12345678901@cluster0.ybfj8e5.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // increase timeout to 30 seconds
})
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });