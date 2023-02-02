"use strict";
exports.__esModule = true;
exports.BMICategories = exports.calculateBMI = void 0;
function calculateBMI(weight, height) {
    return weight / (height * height);
}
exports.calculateBMI = calculateBMI;
var BMICategories;
(function (BMICategories) {
    BMICategories["Underweight"] = "Underweight";
    BMICategories["Normal"] = "Normal";
    BMICategories["Overweight"] = "Overweight";
    BMICategories["Obesity"] = "Obesity";
})(BMICategories = exports.BMICategories || (exports.BMICategories = {}));
