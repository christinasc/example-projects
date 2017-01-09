exports.handler = function (event, context) {
    console.log(event);
    context.succeed('hello world - '+event.name);
};
