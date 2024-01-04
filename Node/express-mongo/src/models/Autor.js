import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
      type: mongoose.Schema.Types.String,
      required: [true, "O nome do(a) autora é obrigatório"],
    },
    nacionalidade: { type: mongoose.Schema.Types.String },
  },
  { versionKey: false }
);

const autor = mongoose.model("autores", autorSchema);

export default autor;
