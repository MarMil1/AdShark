const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3000;
const workfrontApi = require('./routes/workfront-api.js')
const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

/* find route /proj/... */
app.use('/proj', workfrontApi)

// app.get('/', (req, res) => {
//     res.send('Home page')
// })

app.listen(port, function() {
    console.log('Server is running on port ' + port + "...");

})
