const fs = require('fs');

const readFile = (req, res, next) => {
    fs.readFile('users.json', function (err, data) {
        // req.writeHead(200, { 'Content-Type': 'application/json' });
        // const resu = fs.write(data);
        // console.log(resu);
        req.write(data);
        res.end();
        next();
    });
}

module.exports = readFile;