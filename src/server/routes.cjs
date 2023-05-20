const Express = require('express')
const routes = Express.Router();

routes.get('/', (req, res)=>{
    return res.json({ hello: 'world'})
})

module.exports = routes;