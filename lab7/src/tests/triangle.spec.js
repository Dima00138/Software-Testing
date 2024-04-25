const chai = require('chai');

const triangle = require('../triangle');

describe('Triangle', function() {

    describe('Create', function() {
        it('Triangle exists', function() {
            chai.assert.isTrue(triangle(2, 2, 3));
        });

        it('Triangle doesnt exist', function() {
            chai.assert.isFalse(triangle(1, 2, 3));
        });
    });

    describe('Uncorrect input', function(){
        it('Negative length', function() {
            chai.assert.isFalse(triangle(-1, 2, 3));
        });

        it('Char instead of int', function() {
            chai.expect(triangle('a', 2, 3) == false);
        });
    })
});