import path from 'path';
import express from 'express';
import {fileURLToPath} from 'url';
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    res.sendFile(__dirname + `\\dist\\index.html`);
});
router.get("/profile", function(request, response){
    response.sendFile(__dirname + `\\dist\\index.html`);
});



app.use('/.index', router);
module.exports.handler = serverless(app);

// import path from 'path';
// import express from 'express';
// import {fileURLToPath} from 'url';

// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const PORT = 3000;

// app.use(express.static(__dirname + "/dist"));

// app.use("/", function(request, response){

//     response.sendFile(__dirname + `\\dist\\index.html`);
// });
// app.get("/profile", function(request, response){

//     response.sendFile(__dirname + `\\dist\\index.html`);
// });

// app.listen(PORT, () => {
//     console.log(`Application listening on http://localhost:${PORT}!`)
// });