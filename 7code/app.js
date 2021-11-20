var post = require("./post");
var users = require("./users");
var http = require('http');


post.postTitle();
post.postDetail();
console.log(post.postId)

console.log(users.userId)
users.userDetail();

var htmlData = '<h1>Registration</h1><form><input type="text"><input type="submit" value="Add"></form>';

var apiData = {
    status: 'ok',
    statusCode: 200,
    postId: post.postId
}

http.createServer(function (req, res) {
    console.log(req.url)
    if (req.url == '/api') {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(JSON.stringify(apiData))

    } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(htmlData);
    }

    // res.write(JSON.stringify(post.postId))
    res.end();
}).listen(8080)
console.log("server runnning on port 8080")

