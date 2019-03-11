//////// 在這裡寫你的答案 /////////
const RomanRule = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
]

function toRoman(num) {
    let result = ""
    for (let i = 0; i < RomanRule.length; i++) {
        let [roman, n] = RomanRule[i]
        while (num >= n) {
            result += roman
            num -= n
        }
    }
    return result
}
// MMDCCCXCVIII
// 2898-1000M=1898
// 1898-1000M=898
// 898-500D=398
// 398-100C=298
// 298-100C=198
// 198-100C=98
// 98-100C+10X=8
// 8-5V=3
// 3-1I-1I-1I=0
//////// 以下是測試程式，請勿更動 /////////
const expect = (name, value, result) => {
  if (value === result) { return true; }

  throw new Error(`${name} failed successfully`);
};

expect('toRoman(1)', toRoman(1), 'I');
expect('toRoman(2)', toRoman(2), 'II');
expect('toRoman(3)', toRoman(3), 'III');
expect('toRoman(4)', toRoman(4), 'IV');
expect('toRoman(5)', toRoman(5), 'V');
expect('toRoman(6)', toRoman(6), 'VI');
expect('toRoman(9)', toRoman(9), 'IX');
expect('toRoman(27)', toRoman(27), 'XXVII');
expect('toRoman(48)', toRoman(48), 'XLVIII');
expect('toRoman(59)', toRoman(59), 'LIX');
expect('toRoman(93)', toRoman(93), 'XCIII');
expect('toRoman(141)', toRoman(141), 'CXLI');
expect('toRoman(163)', toRoman(163), 'CLXIII');
expect('toRoman(402)', toRoman(402), 'CDII');
expect('toRoman(575)', toRoman(575), 'DLXXV');
expect('toRoman(911)', toRoman(911), 'CMXI');
expect('toRoman(1024)', toRoman(1024), 'MXXIV');
expect('toRoman(3000)', toRoman(3000), 'MMM');
console.log('all pass!');