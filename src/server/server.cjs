const Express = require('express');
const routes = require('./routes.cjs');
const App = Express();

App.use(Express.json());
App.use(routes)

App.listen(3000, ()=> console.log('Rodando na porta http://localhost:3000/'));
