const Controller = require('./Controller.js');
const CategoriaService = require('../services/CategoriaService.js');

const categoriasServices = new CategoriaService();

class CategoriaController extends Controller {
  constructor() {
    super(categoriasServices);
  }
}

module.exports = CategoriaController;