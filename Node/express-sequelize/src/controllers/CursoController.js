const Controller = require('./Controller.js');
const CursoService = require('../services/CursoService.js');

const cursosServices = new CursoService();

class CursoController extends Controller {
  constructor() {
    super(cursosServices);
  }
}

module.exports = CursoController;