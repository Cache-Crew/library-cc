import e from "express";
import mongoose from "mongoose";


await mongoose.connect (process.env.MONGO_URI)

const app = e();
app.use (e.json())

// use router here

app.listen(4000, () =>{
  console.log("Server is running on port 4000")
})