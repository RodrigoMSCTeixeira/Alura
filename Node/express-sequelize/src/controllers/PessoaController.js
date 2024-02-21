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
      //erro
    }
  }
}

module.exports = PessoaController;