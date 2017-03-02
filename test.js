let lambda = require('./lambda');

lambda.handler({}, {}, function(err, response) {
    console.log(response);
});