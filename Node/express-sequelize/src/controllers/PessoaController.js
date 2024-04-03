const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoasServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoasServices);
  }

  async pegaMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoasServices.pegaMatriculasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message })
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaTodasAsPessoas = await pessoasServices.pegaPessoasEscopoTodos()
      return res.status(200).json(listaTodasAsPessoas)
    } catch (erro) {
      return res.status(500).json({ erro: erro.message })
    }
  }
}

module.exports = PessoaController;