const Express = require('express');
const routes = require('./routes.cjs');
const App = Express();
require('../database/index.cjs')

App.use(Express.json());
App.use(routes)


App.listen(3000, ()=> console.log('Rodando na porta http://localhost:3000/'));
