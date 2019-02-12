const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))

var fs = require('fs');
 
 //asincron
fs.readFile('readme.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');



app.listen(port, () => console.log(`Example app listening on port ${port}!`))