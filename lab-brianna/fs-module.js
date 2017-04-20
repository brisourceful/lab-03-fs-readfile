'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/data/one.txt`, function(err, data){
  if(err) throw
  console.error();
})

fs.readFile(`${__dirname}/data/two.txt`, function(err, data) {
  if(err) throw err
  console.log();
})

fs.readFile(`${__dirname}/data/three.txt`, function(err, data) {
  if(err) throw err
  console.log();
});
