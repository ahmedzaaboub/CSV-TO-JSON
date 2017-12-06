var Converter = require('csvtojson').Converter
const fs = require('fs')
var path = require('path')
var converter = new Converter({})

converter.fromFile('customer-data.csv', function (err, result) {
  if (err) {
    console.log('An Error Has Occured')
    console.log(err)
  }

  var json = result

  console.log(json)
  var outPath = path.join(__dirname, 'data.json')

  fs.writeFileSync(outPath, JSON.stringify(json),
    function (err) { console.log(err) })
})
