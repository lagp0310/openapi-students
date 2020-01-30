var express = require("express")

var app = express();
var docs_handler = express.static(__dirname + '/docs/');
app.use(docs_handler);
//  start the server
app.listen(8002, () => {
    console.log('\x1b[36m%s\x1b[0m', "Running Docs on http://localhost:8002. ")
});
