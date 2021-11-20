var postId = [1, 2, 3, 4, 5];

function postTitle() {
    console.log("post title called");
}

function postDetail() {
    console.log("post detail called");
}

// module.exports.postTitle = postTitle
// module.exports.postDetail = postDetail

module.exports = {
    postDetail,
    postTitle,
    postId
}