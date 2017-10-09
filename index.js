function teste(num) {
  var out = [];

  for (var i = 0; i < 3; i++) {
    out.unshift(Math.floor(num / (Math.pow(256, i))) % 256);
  }
  // var b0 = Math.floor(num / (Math.pow(256, 0))) % 256;
  // var b1 = Math.floor(num / (Math.pow(256, 1))) % 256;
  // var b2 = Math.floor(num / (Math.pow(256, 2))) % 256;

  // return [b2, b1, b0] ;
  return out;
}

console.log(teste(0));
console.log(teste(1));
console.log(teste(15));
console.log(teste(254));
console.log(teste(255));
console.log(teste(256));
console.log(teste(257));
console.log(teste(65534));
console.log(teste(65535));
console.log(teste(65536));
console.log(teste(65537));
console.log(teste(16777214));
console.log(teste(16777215));
console.log(teste(16777216));
