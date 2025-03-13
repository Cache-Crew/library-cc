import mongoose, { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const bookSchema = new Schema({
bookTitle: { type: String, required: true, unique: true },
author: { type: String, required: true },
isbn: { type: String, required: true },
genre: { type: String, required: true }, 
coverImage: { type: String }, 
description: { type: String },  
}, { timestamps: true });

bookSchema.plugin(normalize);

export const LibraryModel = model ("Library", bookSchema)
