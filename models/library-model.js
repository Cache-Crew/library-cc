import mongoose, { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const bookSchema = new Schema({
bookTitle: { type: String, required: true, unique: true },
author: { type: String, required: true },
isbn: { type: Number, required: true },
genre: { type: String, required: true }, 
image: { type: String }, 
description: { type: String },  
}, { timestamps: true });

bookSchema.plugin(normalize);

export const LibraryModel = model ("Book", bookSchema)
