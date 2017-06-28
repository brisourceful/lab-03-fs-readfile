'use strict';

const fs = require('fs');

module.exports = function () {
  let arrgArray =[];

  fs.readFile(`${__dirname}/data/one.txt`, function(err, data){
    if(err) throw err;
    arrgArray.push(data.toString('hex', 0, 8));
    console.log(arrgArray)

    fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
      if(err) throw err;
      arrgArray.push(data.toString('hex', 0, 8));
      console.log(arrgArray)

      fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
        if(err) throw err;
        arrgArray.push(data.toString('hex', 0, 8));
        console.log(arrgArray);
      });
    });
  });
  return arrgArray;
};

module.exports();
