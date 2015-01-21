var expect = require('chai').expect;
var plotFinder = require('../plotsFinder');

describe('plotsFinder', function () {
    it("returns proper values for [-5, 0, 7, 6, 4, 3, 5, 0, 2]", function () {
        var array = [-5, 0, 7, 6, 4, 3, 5, 0, 2];
        var result = plotFinder.findPlots(array);

        expect(result.startPlot).to.equal(2);
        expect(result.endPlot).to.equal(6);
        expect(result.getPlotsWorth).to.equal(25);
    });

    it("returns proper values for [2, -2, 0, 3, 4, 1, 0, 0, 7]", function () {
        var array = [2, -2, 0, 3, 4, 1, 0, 0, 7];
        var result = plotFinder.findPlots(array);

        expect(result.startPlot).to.equal(8);
        expect(result.endPlot).to.equal(8);
        expect(result.getPlotsWorth).to.equal(7);
    });

    it("returns proper values for [2, 2, 2, 0, 2, 0, 3, 3, 0]", function () {
        var array = [2, 2, 2, 0, 2, 0, 3, 3, 0];
        var result = plotFinder.findPlots(array);

        expect(result.startPlot).to.equal(6);
        expect(result.endPlot).to.equal(7);
        expect(result.getPlotsWorth).to.equal(6);
    });
});