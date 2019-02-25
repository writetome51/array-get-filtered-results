"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var errorIfNotFunction_1 = require("basic-data-handling/errorIfNotFunction");
// Similar to Array.filter(), except it returns array of objects.  
// Each object is a IValueIndexPair, which looks like this:   {value: any,  index: integer}
// testFunction = function(currentValue, currentIndex?, array?) : return boolean
function getByTest(testFunction, array) {
    errorIfNotFunction_1.errorIfNotFunction(testFunction);
    errorIfNotArray_1.errorIfNotArray(array);
    var filteredResults = [];
    array.filter(function (currentValue, currentIndex, theArray) {
        if (testFunction(currentValue, currentIndex, theArray)) {
            filteredResults.push({ value: currentValue, index: currentIndex });
        }
    });
    return filteredResults;
}
exports.getByTest = getByTest;