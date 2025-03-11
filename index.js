import e from "express";
import mongoose from "mongoose";
import LibraryRouter from "./routes/library-routes.js";


await mongoose.connect (process.env.MONGO_URI)

const app = e();
app.use (e.json())

// use router here
app.use(LibraryRouter);

app.listen(4000, () =>{
  console.log("Server is running on port 4000")
})