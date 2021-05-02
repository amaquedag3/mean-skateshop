const EXPRESS = require('express');
const APP = EXPRESS();
const MORGAN = require('morgan');
const { mongoose } = require('./database');
const CORS = require('cors');
const { Router } = require('express');
const routes = Router();

//Settings
APP.set('port', process.env.PORT || 3000);

//Middlewares
APP.use(MORGAN('dev'));
APP.use(EXPRESS.json());
APP.use(CORS());

//Routes
APP.use('/api/',require('./routes/router'));

APP.listen(APP.get('port'), () => {
    console.log('Server running on port ' + APP.get('port'));
});

