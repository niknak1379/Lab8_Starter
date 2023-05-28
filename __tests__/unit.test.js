// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
test('tests validity of phone number based on the first format of the regex', () => {
    expect(functions.isPhoneNumber('(310)-987-2231')).toBe(true);
})
test('tests validity of pohone number based on the second format of the regex', () => {
    expect(functions.isPhoneNumber('(310)987-2231')).toBe(true);
})
test('tests the validity of phone number if it starts with a letter', () => {
    expect(functions.isPhoneNumber('ddddd')).toBe(false);
})
test('tests validity of phone number if the first 3 optional numbers are gone' +
    ' and the second three is missing a number', () => {
    expect(functions.isPhoneNumber('87-2231')).toBe(false);
})

test('tests validity of email if it starts with a number and ' +
    'doest not have a @ or a .', () => {
    expect(functions.isEmail('310-987-2231')).toBe(false);
})

test('tests validity of email if it follows the expected format', () => {
    expect(functions.isEmail('niknak@gmail.com')).toBe(true);
})


test('tests validity of email if it is missing the required .', () => {
    expect(functions.isEmail('niknak@gmailcom')).toBe(false);
})


test('tests validity of email if it is another format', () => {
    expect(functions.isEmail('niknak@ucsd.edu')).toBe(true);
})

test('tests validity of password if it is too short', () => {
    expect(functions.isStrongPassword('a23')).toBe(false);
})
test('tests validity of password if it is too long', () => {
    expect(functions.isStrongPassword('a23123jj12312313ssss')).toBe(false);
})
test('tests validity of password if it is correct', () => {
    expect(functions.isStrongPassword('himynameIS')).toBe(true);
})
test('tests validity of email if it conforms to the standards', () => {
    expect(functions.isStrongPassword('yessiritis')).toBe(true);
})

test('tests validity of date if months has more than 2 digits', () => {
    expect(functions.isDate('100/2/2013')).toBe(false);
})
test('tests validity of date if year is truncated', () => {
    expect(functions.isDate('1/2/13')).toBe(false);
})
test('tests validity of first date format', () => {
    expect(functions.isDate('1/2/2013')).toBe(true);
})
test('tests validity of second date format', () => {
    expect(functions.isDate('13/20/2017')).toBe(true);
})

test('tests validity of hexcolor if alphabet higher than F', () => {
    expect(functions.isHexColor('#g00')).toBe(false);
})
test('tests validity of hexcolor if 4 digits instead of 4 or 6', () => {
    expect(functions.isHexColor('#F000')).toBe(false);
})
test('tests validity of hex color in the first format', () => {
    expect(functions.isHexColor('#F00')).toBe(true);
})
test('tests validity of hexcolor in the second format', () => {
    expect(functions.isHexColor('#FFFF00')).toBe(true);
})