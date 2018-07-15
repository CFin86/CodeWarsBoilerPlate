const expect = require('chai').expect;
const should = require('chai').should();
const index = require('../index');

describe('Tests for Reverse or Rotate CodeWars challenge', function () {
    describe('revrot function', function () {
        it('should return an empty string when sz is less than 0', function () {
            const result = index.revrot('1234', 0);
            expect(result).to.be.a('string');
            expect(result).to.equal("");
        });
        it('should return an empty string when sz is less than 0', function () {
            const result = index.revrot('', 0);
            expect(result).to.be.a('string');
            expect(result).to.equal("");
        });
        it('should return an empty string when sz is less than 0', function () {
            const result = index.revrot('1234', 5);
            expect(result).to.be.a('string');
            expect(result).to.equal("");
        });
        it('should return "330479108928157" when str is "733049910872815764" and sz = 5', function () {
            const result = index.revrot("733049910872815764", 5);
            expect(result).to.be.a('string');
            expect(result).to.equal("330479108928157");
        })
        it('should return "1994033775182780067155464327690480265895" when \
                str is "73304991087281576455176044327690580265896" and sz = 8', function () {
            const result = index.revrot("73304991087281576455176044327690580265896", 8);
            expect(result).to.be.a('string');
            expect(result).to.equal("1994033775182780067155464327690480265895");
        })
        it('should return "1994033775182780067155464327690480265895" when ' +
         'str is "73304991087281576455176044327690580265896896028" sz = 8', function () {
            const result = index.revrot("73304991087281576455176044327690580265896896028", 8);
            expect(result).to.be.a('string');
            expect(result).to.equal("1994033775182780067155464327690480265895");
        })
        it('should return "3304991087781576455172509672344060265896896862281621820" when \
        str is "73304991087281576455176044327690580265896896028126182265439" and sz 11', function () {
            const result = index.revrot("73304991087281576455176044327690580265896896028126182265439", 11);
            expect(result).to.be.a('string');
            expect(result).to.equal("3304991087781576455172509672344060265896896862281621820");
        })
         it('should return "1827801994033776455176044325690580265896875622816218206939441215340984" when \
                  str is "73304991087281576455176044327690580265896896028126182265439441215340989" sz 14', function () {
            const result = index.revrot("73304991087281576455176044327690580265896896028126182265439441215340989", 14);
             expect(result).to.be.a('string');
             expect(result).to.equal("1827801994033776455176044325690580265896875622816218206939441215340984");
         })
         it('should return "0365065073456944" when sr is "563000655734469485" sz 4', function () {
             const result = index.revrot("563000655734469485", 4);
             expect(result).to.be.a('string');
             expect(result).to.equal("0365065073456944");
         })
     })
 })