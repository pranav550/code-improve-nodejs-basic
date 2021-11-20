var post = require("./post");
var users = require("./users");
var http = require('http');


post.postTitle();
post.postDetail();
console.log(post.postId)

console.log(users.userId)
users.userDetail();

http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Hello Code improve");
    res.write(JSON.stringify(post.postId))
    res.end();
}).listen(8080)
console.log("server runnning on port 8080")

