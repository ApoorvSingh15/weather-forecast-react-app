const express = require('express');

let app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('src'));

app.listen( 8080, function(){
    console.log('Express Server running on port ' + PORT);
})