const express     = require('express');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
const path        = require('path');
const fetch       = require("node-fetch");
const { createEngine } = require('express-react-views');

const app = express();
// init a port
const PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());



// logger
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/',(req,res)=> {
// fetch the api data

})





app.listen(PORT, () => console.log(`Server up and listening on port ${PORT} in ${app.get('env')} mode`));

