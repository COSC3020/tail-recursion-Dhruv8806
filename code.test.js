const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync('code.js').toString());

// Test 1
let result1 = TailFib(3);
let expected1 = 2;
assert(result1 == expected1);

// Test 2
let result2 = TailFib(5);
let expected2 = 5;
assert(result2 == expected2);

// Test 3
let result3 = TailFib(8);
let expected3 = 21;
assert(result3 == expected3);

// Test 4
let result4 = TailFib(12);
let expected4 = 144;
assert(result4 == expected4);

// Test 5
let result5 = TailFib(16);
let expected5 = 987;
assert(result5 == expected5);

// Test 6
let result6 = TailFib(20);
let expected6 = 6765;
assert(result6 == expected6);

// Test 7
let result7 = TailFib(26);
let expected7 = 121393;
assert(result7 == expected7);

