* These are the first ten flash cards*
1 --------------
DEFINITION:
includes() determines whether an array includes a certain element. returns TRUE or FALSE.

EXAMPLE:
let a = [1,2,3]
a.includes(2) // true
a.includes(4) // false

SYNTAX:
arr.includes(searchElement, fromIndex)


2 ---------------
DEFINITION:
indexOf() returns the first index at which a given element can be found in the array. Returns -1 if it is not found.

EXAMPLE:
let a = [1,2,3]
a.indexOf(2) // 1
a.indexOf(4) // -1

SYNTAX:
arr.indexOf(searchElement [, fromIndex])


3 ---------------
DEFINITION:
slice() returns a shallow COPY of a portion of an array into a new array object selected from BEGIN (Inclusive) to END (Non-Inclusive). ORIGINAL ARRAY NOT MUTATED.

EXAMPLE: 
let a = ['zero', 'one', 'two','three']
let sliced = a.slice(1,3)

a = ['zero', 'one', 'two','three']
sliced = ['one', 'two']

SYNTAX
arr.slice(beginIndex, endIndex)


4 --------------
DEFINITION:
splice() changes the contents of an array by removing existing elements and/or adding new elements.

EXAMPLE:
let numbers = ['zero', 'one', 'two', 'three']

numbers.splice(2, 0, 'BANANA') // inserts banana at index-2
// numbers = ['zero', 'one', 'BANANA', 'two', 'three']

numbers.splice(2,1) // removes 1 item starting at index-2
// numbers = numbers = ['zero', 'one', 'three'] 

SYNTAX:
arr.splice(start, deleteCount, item to add to array)

5 --------------
DEFINITION:
every() tests whether ALL ELEMENTS in the array pass the test implemented by the provided function.

EXAMPLE:
function isBigEnough(element, index, array) {
  return element >= 10
}

[2, 4 , 6, 8].every(isBigEnough) // false
[12, 14, 16, 18].every(isBigEnough) // true

SYNTAX:

arr.every(callback)

6 --------------
DEFINITION:
charAt() returns the specified character from a string. If no index is provided, charAt() will use index-0. Will return and empty string if index is out of range.

EXAMPLE:
let str = 'abc'
str.charAt(1) // "b"
str.charAt(5) // "" 

SYNTAX:
str.charAt(index)

7 --------------
DEFINITION:
concat() combines the text of one or more strings and returns a NEW String. ORIGINAL STRING NOT MUTATED.

EXAMPLE:
let str = 'abc'

str.concat('def', 'ghi') // 'abcdefghi'

SYNTAX:
str.concat(string2[,string3, ..., stringN]) 

8 --------------
DEFINITION:
includes() determines whether one string may be found within another string, returning TRUE or FALSE. CASE SENSITIVE

EXAMPLE:
let str = 'abcdefg'
str.includes('def') // True
str.includes('fghi') // False

SYNTAX:
str.includes(searchString[, startIndex])

9 --------------
DEFINITION:
slice() extracts a section of a string, from BEGIN (Inclusive) to END (Non-Inclusive), and returns it as a NEW String. ORIGINAL STRING NOT MUTATED.

EXAMPLE:
let str = 'abcdefg'
str.slice(0,3) // 'abc'

SYNTAX:
str.slice(beginIndex[, endIndex])

10 -------------
DEFINITION:
substr() returns the characters in a string beginning at the specified location (index) through the specified number (length) of characters (inclusive).

EXAMPLE:
let str = 'abcdefg'
str.substr(0, 3) // 'abc'
str.substr(1, 3) // 'bcd'
str.substr( -3 ) // 'efg'

SYNTAX:
str.substr(start, [length])

11 -------------
DEFINITION:
substring() returns a subset of a string between one index START (inclusive) and another END (Non-Inclusive), or through the end of the string (if indexEnd is omitted).

EXAMPLE:
let str = 'abcdefg'
str.substring(0, 3) // 'abc'
str.substring(4,7) // 'efg'


SYNTAX:
str.substring(indexStart, [indexEnd])
