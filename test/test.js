'use strict';

var expect = require('chai').expect;
var index = require('../index');

describe('#roundUp', function () {
    it('should convert convert in rounding with 2 decimal', function () {
        var result = index.roundUp(2.355555);
        expect(result).to.equal(2.36);
    });
    it('should convert convert in rounding with 2 decimal', function () {
        var result = index.roundUp(2.35455);
        expect(result).to.equal(2.35);
    });
});