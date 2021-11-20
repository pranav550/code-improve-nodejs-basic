var events = require("events");
var eventEmitter = new events.EventEmitter();
var getOrder = function () {
    console.log("order placed");
}

eventEmitter.on('test', getOrder);
eventEmitter.emit('test')

var giftFn = function (giftname) {
    console.log("gift name is " + giftname);
}

eventEmitter.on('test1', giftFn);
eventEmitter.emit('test1', 'birthday cake')