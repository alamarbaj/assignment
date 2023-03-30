var express = require('express');
var router = express.Router();
const { countries } = require('../configs/countries')
const userFunction = require('../services/functions')


router.get('/api/get-countries-tags', async (req, res) => {
  try {
    const numRows = 3;
    const numCols = 3;
    const response = { countries: [], rank: [] }

    // Generate the country matrix
    const matrix = userFunction.generateCountryMatrix(numRows, numCols, countries);

    // Print / Push the matrix
    for (let i = 0; i < matrix.length; i++) {
      response.countries.push(matrix[i])
    }

    // Calculate the ranks
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      const rank = userFunction.calculateCountryRank(matrix, country);
      if (rank >= 2) {
        response.rank.push({ country, rank })
      }
    }
    console.log("response : ", response);
    
    res.render('index', {
      response
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      msg: 'Gettng API Internal Error..' + error.message,
      data: [],
    })
  }
})

module.exports = router;
