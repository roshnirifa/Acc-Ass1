const fs = require('fs');
const path = require('path');
const users = require("../users.json");


// Get all users by limits
module.exports.getAllUsers = async (req, res) => {
    try {
        const query = req.query;
        if (query) {
            const { limit } = query;
            const data = await users.slice(0, limit);
            res.send(data)
        }
        else {
            res.send(users)
        }
    } catch (error) {
        console.log(error);
        res.send(error.massage);
    }
}


// Get Random Files
module.exports.randomUser = async (req, res) => {
    try {
        const data = users;
        const randomId = Math.floor(Math.random() * data.length);
        const filteredData = data.filter(data => data.id === (randomId + 1));
        res.send(filteredData);
    } catch (error) {
        res.send(error.massage);
    }
}

module.exports.saveUsers = async (req, res) => {
    try {
        let preData = users;
        const user = req.body;
        const { id, name, gender, contact, address, photoUrl } = user;
        if (id && name && gender && contact && address && photoUrl) {
            preData.push(user);
            return res.send(preData);
        } else {
            res.send({ message: " User details isn't valid or doesn't require the requirement " })
        }
    } catch (error) {

    }
}


// update the user Detail
module.exports.updateUserDetail = (req, res) => {
    const id = Math.floor(Math.random() * users.length) + 1;
    const newUserDetail = req.body;
    const filter = users.find((user) => user.id === Number(id));
    filter.name = newUserDetail.id || filter.id;
    filter.gender = newUserDetail.gender || filter.gender;
    filter.name = newUserDetail.name || filter.name;
    filter.contact = newUserDetail.contact || filter.contact;
    filter.address = newUserDetail.address || filter.address;
    filter.photoUrl = newUserDetail.photoUrl || filter.photoUrl;
    res.send(filter);
};


// user bulk update 
module.exports.userBulkUpdate = (req, res) => {
    const { id } = req.params;
    const newUserDetail = req.body;
    const filter = users.find(user => user.id === Number(id));
    filter.name = newUserDetail.id || filter.id;
    filter.gender = newUserDetail.gender || filter.gender;
    filter.name = newUserDetail.name || filter.name;
    filter.contact = newUserDetail.contact || filter.contact;
    filter.address = newUserDetail.address || filter.address;
    filter.photoUrl = newUserDetail.photoUrl || filter.photoUrl;
    res.send(filter)

}

// user Delete 
module.exports.userDelete = (req, res) => {
    const totalUser = users.length + 1;
    const { id } = req.params;
    if (totalUser == id) {
        if (Number(id)) {
            result = user.filter(use => use.id !== Number(id));
            res.send(result);
        } else {
            res.send({ message: "not number" })
        }
    } else {
        res.send({ message: "your id is invalid" })
    }

}