const https = require('https');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

setInterval(function() {
	https.get('https://resourcebooking.herokuapp.com/');
}, 300000); // every 5 minutes (300000)

setInterval(function() {
	https.get('https://resourcebookingawake.herokuapp.com/');
}, 300000); // every 5 minutes (300000)
