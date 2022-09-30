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

app.get("/all", (req, res) => {
    console.log(req);
    res.send({ data: "got" });
})


// check get route 
app.get('/', (req, res) => {
    res.send('Random User Load');
})


app.listen(port, () => {
    console.log(`app running on port ${port}`);
})