var express = require('express');
var router = express.Router();

const Dashboard = require('../../services/dashboard');

router.get("/get-all", (req, res, next) => {
    try {
        Dashboard.getAll().then(response => {
            res.json(response);
        });
    } catch (err) {
        console.error("Opps!! Something went wrong:", err.message);
    }
});

module.exports = router;
