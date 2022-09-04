// Unit Testing with Mocha and Chai
const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Simple multiply', ()=>{
    it('Multiplying first test', ()=>{
        assert.Equal(multiply(1, 1), 1);
    });
})