const expect = require('chai').expect;
const should = require('chai').should();
const index = require('../index');
    //if you are writing code in this file and
    //you are on the master branch you are doing it wrong.
    //create a new branch you heathen!

describe('Tests for Boilerplate CodeWars Repo', function () {
    describe('nameOfFunction function', function () {
        it('Should return a concatenated string when ' +
        '\n a string is passed in to either variables', function () {
            const result = index.nameOfFunction('Hello', 'World!');
            expect(result).to.be.a('string');
            expect(result).to.equal("HelloWorld!");
        });
        it('Should return sum of two integers when ' +
        '\n integers are passed in to both variables', function () {
            const result = index.nameOfFunction(5, 5);
            expect(result).to.be.a('number');
            expect(result).to.equal(10);
        });
    })
})