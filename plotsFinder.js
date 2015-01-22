var _ = require('lodash');

var sum = function (array) {
    return _.reduce(array, function (sum, num) {
        return sum + num;
    });
};

function PlotsRange(start, end, array) {
    this.start = start;
    this.end = end;
    this.array = array;
}

PlotsRange.prototype.getPlots = function () {
    return this.array.slice(this.start, this.end + 1);
};

PlotsRange.prototype.getPlotsWorth = function () {
    var range = this.getPlots();
    return sum(range);
};

PlotsRange.prototype.getPlotsCount = function () {
    return this.end - this.start;
};

PlotsRange.prototype.profitability = function () {
    return this.getPlotsWorth() - this.getPlotsCount();
};

PlotsRange.prototype.isBetterThen = function (range) {
    if (this.profitability() === range.profitability()) {
        return this.getPlotsCount() < range.getPlotsCount();
    }
    return this.profitability() > range.profitability();
};

PlotsRange.prototype.isBetterThen = function (range) {
    return this.profitability() > range.profitability();
};

function findPlots(array) {
    var bestRange = new PlotsRange(0, 0, array);
    var currentRange = new PlotsRange(0, 0, array);

    for (var i = 0; i < array.length; i++) {
        currentRange.end = i;
        if (currentRange.getPlotsWorth() <= 0) {
            currentRange = new PlotsRange(i + 1, i + 1, array);
            continue;
        }
        if (currentRange.isBetterThen(bestRange)) {
            bestRange = new PlotsRange(currentRange.start, currentRange.end, array);
        }
        else {
            currentRange = new PlotsRange(i + 1, i + 1, array);
        }
    }
    return {
        startPlot: bestRange.start,
        endPlot: bestRange.end,
        plotsWorth: bestRange.getPlotsWorth()
    };
}

module.exports.findPlots = findPlots;