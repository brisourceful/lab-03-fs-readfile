'use strict';

const fs = require('fs');
const expect = require('chai').expect;

const textArray = ['./data/one.txt', './data/two.txt', './data/three.txt'];
 const hexArray = [];
 const testData = ['4120776f6e646572','5468652071756963','4661722066617220'];

 describe('fs-module', function(){
   describe('#readFile', function(){
     it('should produce an array and equal values', done => {
       fs.readFile(textArray[0], (err, data) => {
         if(err) throw err;
         hexArray.push(data.toString('hex', 0, 8));
         expect(hexArray[0]).to.equal(testData[0]);
         done();
       });
     });
     it('should produce an array and equal values', done => {
       fs.readFile(textArray[1], (err, data) => {
         if(err) throw err;
         hexArray.push(data.toString('hex', 0, 8));
         expect(hexArray[1]).to.equal(testData[1]);
         done();
       });
     });

      it('should produce an array and equal values', done => {
        fs.readFile(textArray[2], (err, data) => {
             if(err) throw err;
             hexArray.push(data.toString('hex', 0, 8));
             expect(hexArray[2]).to.equal(testData[2]);
             done();
        });
      });
    });
  });
