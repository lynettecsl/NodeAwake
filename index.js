const http = require('http');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

setInterval(function() {
	http.get('https://nodestocks.herokuapp.com/');
}, 300000); // every 5 minutes (300000)

setInterval(function() {
	http.get('https://nodeawake.herokuapp.com/');
}, 300000); // every 5 minutes (300000)
