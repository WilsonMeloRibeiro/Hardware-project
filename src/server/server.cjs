const Express = require('express');
const routes = require('./routes.cjs');
const App = Express();
const cors = require('cors')
require('../database/index.cjs')

App.use(cors())
App.use(Express.json());
App.use(routes)


App.listen(3000, ()=> console.log('Rodando na porta http://localhost:3000/'));
