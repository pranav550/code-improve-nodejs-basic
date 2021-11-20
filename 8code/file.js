var http = require('http');
var fs = require('fs');

// write file
// fs.writeFileSync('text.txt', 'hello code improve')

// append file
// fs.appendFileSync('text.txt', ' This is node series')

// read file
// var fileData = fs.readFileSync('text.txt', 'utf-8');
// console.log(fileData);

//--------------convert buffer to readable format----------------//
// console.log(fileData.toString())
//fs.readFileSync('text.txt', 'utf-8');
//--------------convert buffer to readable format ends----------------//

// rename file
//fs.renameSync('text.txt', 'info.txt');

// delete file
//fs.unlinkSync('info.txt');

// create directory
// fs.mkdirSync('dummy');
// fs.writeFileSync('dummy/text.txt', 'hello code improve')

//-------------------------Async-------------------------------------

// write file
// fs.writeFile('test.txt', 'This is dummy data', function (err) {
//     console.log("created")
// })

// append file
// fs.appendFile('test.txt', 'this is node code', function (err) {
//     console.log("append")
// })

// read file
// fs.readFile('test.txt', function (err, data) {
//     console.log(data.toString())
// })

// rename file
// fs.rename('test.txt', 'demo.txt', function (err, data) {
//     console.log("rename")
// })

// delete
// fs.unlink('demo.txt', function (err, data) {
//     if (err) throw err;
//     console.log("delete")
// })

// make dir
fs.mkdir('assets', function () {
    console.log("folder created")
})



http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Code improve');
    res.end();
}).listen(8080)

