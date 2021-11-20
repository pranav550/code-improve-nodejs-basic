var fs = require("fs");

//------------ read---------------
// var rdstream = fs.createReadStream('demo.txt');

// rdstream.setEncoding('UTF-8');

// var data = '';
// rdstream.on('data', function (dt) {
//     data += dt;
// })

// rdstream.on('end', function () {
//     console.log(data);
// })

//--------------- write--------------------
// wrData = "Hello Code improve"
// var wtstream = fs.createWriteStream('demo-new.txt');

// wtstream.write(wrData, 'UTF-8');
// wtstream.end();

// wtstream.on('finish', function () {
//     console.log("file done")
// })


// -----------------pipe------------------
//copy data from one file to another file
var rdstream = fs.createReadStream('demo.txt');
var wtstream = fs.createWriteStream('demo-test.txt');
rdstream.pipe(wtstream);