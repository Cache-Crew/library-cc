import { Schema, model } from "mongoose";

const bookSchema = new Schema({
title: { type: String, required: true, unique: true },
author: { type: String, required: true },
publishedYear: { type: Number, required: true },
genre: { type: String, required: true },
copiesAvailable: { type: Number, required: true, default: 1 }, 
coverImage: { type: String }, 
description: { type: String }, 
publisher: { type: String }, 
addedDate: { type: Date, default: Date.now },
}, { timestamps: true });

export const LibraryModel = model ("Library", bookSchema)
