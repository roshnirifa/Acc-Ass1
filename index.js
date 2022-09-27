const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
const file = require('file-system');
const fs = require('fs');
const readFile = require('./middleware/readFile.middleware');
const usersRoute = require('./routes/UserRoutes.js');

app.use("/user", usersRoute);

app.get("/all", readFile, (req, res) => {
    // let data = fs.writeFile('users.json', 'aaa', function(err) { console.log(err) });
    // fs.readFile('users.json', function (err, data) {
    //     res.send({ result: data, success: true });
    // })

    console.log(req);
    res.send("got");

    // fs.readFile('users.json', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     // const resu = fs.write(data);
    //     // console.log(resu);
    //     res.write(data);
    //     return res.end();
    //   });
})


// check get route 
app.get('/', (req, res) => {
    res.send('Random User Load');
})


app.listen(port, () => {
    console.log(`app running on port ${port}`);
})