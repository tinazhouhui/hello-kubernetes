import express from 'express';

const app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
    const dirname = new URL('.', import.meta.url).pathname;
    res.sendFile(dirname + '/' + 'index.html');
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {  // initialize server
	console.log(`I am up and running at http://localhost:${PORT}`);
});