const express = require('express');

const burger = require('../models/burger');

const router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/burger", function (req, res) {
    burger.create(req.body, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true,
    }, condition, function (result) {

        res.status(200).end();
    }
    );
});



module.exports = router;