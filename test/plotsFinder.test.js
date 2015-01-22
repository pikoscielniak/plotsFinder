var expect = require('chai').expect;
var plotFinder = require('../plotsFinder');

describe('plotsFinder', function () {

    describe("findPlots", function () {


        function getNumber() {
            return Math.floor(Math.random() * 2000 - 1000);
        }

        function createArray(size) {
            var array = [];
            for (var i = 0; i < size; i++) {
                array.push(getNumber());
            }
            return array;
        }

        it("returns proper values for [-5, 0, 7, 6, 4, 3, 5, 0, 2]", function () {
            var array = [-5, 0, 7, 6, 4, 3, 5, 0, 2];
            var result = plotFinder.findPlots(array);

            expect(result.startPlot).to.equal(2);
            expect(result.endPlot).to.equal(6);
            expect(result.plotsWorth).to.equal(25);
        });

        it("returns proper values for [2, -2, 0, 3, 4, 1, 0, 0, 7]", function () {
            var array = [2, -2, 0, 3, 4, 1, 0, 0, 7];
            var result = plotFinder.findPlots(array);

            expect(result.startPlot).to.equal(8);
            expect(result.endPlot).to.equal(8);
            expect(result.plotsWorth).to.equal(7);
        });

        it("returns proper values for [2, 2, 2, 0, 2, 0, 3, 3, 0]", function () {
            var array = [2, 2, 2, 0, 2, 0, 3, 3, 0];
            var result = plotFinder.findPlots(array);

            expect(result.startPlot).to.equal(6);
            expect(result.endPlot).to.equal(7);
            expect(result.plotsWorth).to.equal(6);
        });

        it("for 2000000 plots should take less than 2000ms", function (done) {
            var array = createArray(2000000);
            plotFinder.findPlots(array);

            done();
        });

    });
});