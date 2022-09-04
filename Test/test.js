// Unit Testing with Mocha and Chai
const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Simple multiply', ()=>{
    it('Multiplying first test', ()=>{
        assertEqual(multiply(1, 1), 1);
    });
})