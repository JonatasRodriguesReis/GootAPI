const app = require('./app');
const port = process.env.PORT || 3000

var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});