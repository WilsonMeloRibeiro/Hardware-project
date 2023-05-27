const Express = require('express');
const routes = require('./routes.cjs');
const App = Express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session')
require('../database/index.cjs')

App.use(Express.json());
App.use(session({
    key: 'userId',
    secret: 'oi4bq7OleVDO5YrqTnlk',
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24,
    },
}))
App.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}))
App.use(cookieParser());
App.use(bodyParser.urlencoded({ extended: true}));
App.use(routes)



App.listen(3000, ()=> console.log('Rodando na porta http://localhost:3000/'));
