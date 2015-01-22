"use strict";
var plotsFinder = require('../../plotsFinder');
var util = require('util');
var _ = require('lodash');

function prepareDisplayResult(result) {
    return util.format('%d %d %d', result.startPlot + 1, result.endPlot + 1, result.plotsWorth);
}

function prepareArray(values) {
    var array = values.split(' ');
    return _.map(array, function (item) {
        return parseInt(item, 10);
    });
}

module.exports = function () {
    var vm = this;

    vm.findPlots = function (values) {
        var array = prepareArray(values);
        var result = plotsFinder.findPlots(array);

        vm.displayResult = prepareDisplayResult(result);
    };

    vm.clear = function () {
        vm.values = "";
        vm.displayResult = "";
    };
};