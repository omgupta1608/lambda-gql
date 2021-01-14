exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: [{id: 1, data:"BLOG 1"},{id: 2, data:"BLOG 2"}]
    });
}