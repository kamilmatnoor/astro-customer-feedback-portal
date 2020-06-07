var express = require('express');
var router = express.Router();

const Review = require('../../services/review');

router.get("/", (req, res, next) => {
    try {
        Review.getAll().then(response => {
            res.json(response);
        });
    } catch (err) {
        console.error("Opps!! Something went wrong:", err.message);
    }
});

router.post("/add-new", (req, res, next) => {
    try {
        Review.addNew({
            data: req.body
        }).then(response => {
            res.json(response);
        });
    } catch (err) {
        console.error("Opps!! Something went wrong:", err.message);
    }
});

module.exports = router;
