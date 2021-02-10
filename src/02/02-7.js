var x = 0;
var y = 0;
// var obj = { x: x, y: y };
var obj = { x, y };

var randomkeyString = 'other';
// var combined = {};
// combined['one' + randomkeyString] = ['some value'];
var combined = {
  ['one' + randomkeyString]: 'some value',
};

// var obj2 = {
//   x: x,
//   methodA: function () {
//     console.log('method A');
//   },
//   methodB: function () {
//     return 0;
//   },
// };
var obj2 = {
  x,
  methodA() {
    console.log('method A');
  },
  methodB() {
    return 0;
  },
};

var list = [0, 1];
// var item1 = list[0];
// var item2 = list[1];
// var item3 = list[2] || -1;
var [item1, item2, item3 = -1] = list;

// var temp = item2;
// item2 = item1;
// item1 = temp;
[item2, item1] = [item1, item2];

var obj = {
  key1: 'one',
  key2: 'two',
};
// var key1 = obj.key1;
// var key2 = obj.key2;
// var key3 = obj.key3 || 'default key3 value';
// var newKey1 = obj.key1;
var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;
