var open = require('open');
var path = require('path');

open(path.join(__dirname, "www/index.html"), function (err) {
    if (err) {
        console.log(err);
    }
});