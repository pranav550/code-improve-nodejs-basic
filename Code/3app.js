/////////////-------Global Object----------------////////////////////////////

// console.log(__filename, "filename");
// console.log(__dirname, "dirname");

/////////////-----------------------////////////////////////////

// let callback = () => {
//     console.log("called after 2 sec")
// }



// console.log("Hello");
// setTimeout(() => {
//     callback()
// }, 2000)
// console.log("Hello Again")

/////////////-----------------------////////////////////////////

// let callback1 = () => {
//     console.log("Call every 2 sec");
// }

// setInterval(() => {
//     callback1()
// }, 2000)

/////////////-----------------------////////////////////////////
// callback
let getData = (data) => {
    console.log("yes got it ", data)
}

let secondData = (cb) => {
    cb("Yes I can")
}

secondData(getData);

/////////////////////////////////////////////////////////////////
