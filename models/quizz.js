import mongoose from 'mongoose';
const { Schema } = mongoose;

// quizz schema example
const quizzSchema = new Schema({
  questionario:  String, 
  objetivo: String,
  categorias:   String,
  questoes: [{text: {type: String,required: true}}],
  respostascertas:[{type: String}],
  respostaserradas:[{type: String}],
  feedbackrespostas:[{type: String}]
  });