const express = require('express');
const router = express.Router();
const usersRoute = require("../controller/UserRouteController.js");

router
    .get("/all", usersRoute.getAllUsers)
    .get("/random", usersRoute.randomUser)
    .post("/save", usersRoute.saveUsers)
    .patch('/update ', usersRoute.updateUserDetail)
    .patch('/bulk-update/:Id', usersRoute.userBulkUpdate)
    .delete('/delete/:Id', usersRoute.userDelete)

module.exports = router;