import e from "express";
import mongoose from "mongoose";
import cors from "cors";
import LibraryRouter from "./routes/library-routes.js";


await mongoose.connect (process.env.MONGO_URI)

const app = e();
app.use (e.json())
app.use (cors())

// use router here
app.use(LibraryRouter);

// Listen for incoming request
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`)
})