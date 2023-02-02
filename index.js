"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var bmiCalculator_1 = __importDefault(require("./bmiCalculator"));
var app = (0, express_1["default"])();
app.get('/hello', function (_req, res) {
    res.send('Hello Full Stack!');
});
app.get('/bmi', function (req, res) {
    var height = Number(req.query.height);
    var weight = Number(req.query.weight);
    if (!isNaN(height) && !isNaN(weight)) {
        var bmi = (0, bmiCalculator_1["default"])(height, weight);
        res.send({
            weight: weight,
            height: height,
            bmi: bmi
        });
    }
    else {
        res.status(400).send({ error: 'malformatted parameters' });
    }
});
var PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
