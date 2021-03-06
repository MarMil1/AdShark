const express = require('express')
const axios = require('axios');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();

console.log('workfront server')
const url = 'https://americanhotel.my.workfront.com/attask/api/v9.0/proj/';
const API_KEY = process.env.WORKFRONT_API_KEY;

/* GET data */
router.get('/', (req, res) => {
    res.send("From API route!")
})

router.get('/:id', (req, res) => {
    const proID = req.params.id;
    console.log('GET /proj/' + proID);

    axios.get(url + proID, { params: {
        fields: 'parameterValues',
        apiKey: API_KEY
        }, headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin' :'*'}
        // , transformResponse: [function(data) {}]
    })
    .then(function (response) {
        res.json(response.data)
    })
    .catch(function (err) {
        console.log(err);
    })
    .then(function () {
        // console.log('always executed here');
    })
})

/* PUT data */
router.put('/:id/update', (req, res) => {
    const proID = req.params.id;
    const updatedData = JSON.stringify(req.body)
    console.log('PUT /proj/' + proID + '/update');

    axios.put(url + proID + '?apiKey=' + API_KEY, updatedData, { headers: { "Content-Type": "application/json;" } })
    .then(function (response) {
        //res.set('Content-Type', 'text/html');
        res.send('Successfully updated!');
        console.log('Successfully updated the data!');
    })
    .catch(function (err) {
        console.log('Catch some error. Could\'t update data');
    })

})

module.exports = router
