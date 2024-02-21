import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: mongoose.Schema.Types.String,
      required: [true, "O título do livro é obrigatório."],
    },
    editora: {
      type: mongoose.Schema.Types.String,
      required: [true, "A editora é obrigatório."],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido.",
      },
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"],
    },
    preco: { type: mongoose.Schema.Types.Number },
    paginas: {
      type: mongoose.Schema.Types.Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message:
          "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}",
      },
    },
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
