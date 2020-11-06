const app = require('./app');

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});