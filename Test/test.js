// Unit Testing with Mocha and Chai
const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Simple multiply', ()=>{
    it('Multiplying first test', ()=>{
        assert.equal(multiply(1, 1), 1);
    });
    it('Multiplying second test', ()=>{
        assert.equal(multiply(2, 2), 4);
    });
    it('Multiplying third test', ()=>{
        assert.equal(multiply(3, 3), 9);
    });
    it('Multiplying fourth test', ()=>{
        assert.equal(multiply(4, 4), 16);
    });
    it('Multiplying fifth test', ()=>{
        assert.equal(multiply(23, 45), 23 * 45);
    });
})