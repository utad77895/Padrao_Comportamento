import mongoose from 'mongoose';
const { Schema } = mongoose;

// analytics schema example ainda a definir campos
const quizzSchema = new Schema({
  questionario:  String, 
  objetivo: String,
  categorias:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});