import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.json()); // json body parser
app.get('/', function (req, res) {
    const dirname = new URL('.', import.meta.url).pathname;
    res.sendFile(dirname + '/' + 'index.html');
});

app.get('/pod', function (req, res) {
    res.send({hostname: process.env.HOSTNAME, home: process.env.HOME, env: process.env})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {  // initialize server
	console.log(`I am up and running at http://localhost:${PORT}`);
});