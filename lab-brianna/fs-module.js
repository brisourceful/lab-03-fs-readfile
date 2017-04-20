'use strict';

const fs = require('fs');

module.exports = function () {
  let arrg =[];
  fs.readFile(`${__dirname}/data/one.txt`, function(err, data){
    if(err) throw err;
    arrg.push(data.toString('hex', 0, 8));

    fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
      if(err) throw err;
      arrg.push(data.toString('hex', 0, 8));

      fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
        if(err) throw err;
        arrg.push(data.toString('hex', 0, 8));
      });
    });
  });
};

module.exports();
