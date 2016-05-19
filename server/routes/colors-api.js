var express = require('express');
var colorData = require('../../data');
var router = express.Router();

router.get("/", function(req, res) {
    res.json(['/colors', '/color/:id']);
});

// Data routes for colors
router.get("/colors", function(req, res) {
    res.json(colorData);
});

router.post("/colors", function(req, res) {
    res.json(colorData);
});

router.get("/color/:id", function(req, res) {
    res.json(colorData.filter(c=>c.id==req.params.id));
});

router.put("/color/:id", function(req, res) {
    res.json(colorData);
});

router.delete("/color/:id", function(req, res) {
    res.json(colorData);
});

module.exports = router;