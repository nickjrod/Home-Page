const express = require('express');
const expressEdge = require('express-edge');
const path = require('path');

const app = new express();

app.use(express.static('public'));
app.set('views', __dirname+'/views');

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public/html/index.html'));
})

let port = process.env.PORT;
if (port == null || port == "") {
	port = 8000;
}
app.listen(port, () => {
	console.log("Running")
});