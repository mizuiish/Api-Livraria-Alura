import mongoose from "mongoose";

mongoose.connect("mongodb+srv://nicollemathias:HxgmIgZyAKXCI2bw@alura.hh9xeoa.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;