// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
test('tests validity of phone number', () => {
    expect(functions.isPhoneNumber('(310)-987-2231')).toBe(true);
})
test('tests validity of phone number', () => {
    expect(functions.isPhoneNumber('(310)987-2231')).toBe(true);
})
test('testsddd validity of phone number', () => {
    expect(functions.isPhoneNumber('ddddd')).toBe(false);
})
test('tests validity of phone number', () => {
    expect(functions.isPhoneNumber('87-2231')).toBe(false);
})

test('tests validity of phone number', () => {
    expect(functions.isEmail('310-987-2231')).toBe(false);
})

test('tests validity of phone number', () => {
    expect(functions.isEmail('niknak@gmail.com')).toBe(true);
})


test('tests validity of phone number', () => {
    expect(functions.isEmail('niknak@gmailcom')).toBe(false);
})


test('tests validity of phone number', () => {
    expect(functions.isEmail('niknak@ucsd.edu')).toBe(true);
})

test('tests validity of phone number', () => {
    expect(functions.isStrongPassword('a23')).toBe(false);
})
test('tests validity of phone number', () => {
    expect(functions.isStrongPassword('a23123jj12312313ssss')).toBe(false);
})
test('tests validity of phone number', () => {
    expect(functions.isStrongPassword('himynameIS')).toBe(true);
})
test('tests validity of phone number', () => {
    expect(functions.isStrongPassword('yessiritis')).toBe(true);
})

test('tests validity of phone number', () => {
    expect(functions.isDate('100/2/2013')).toBe(false);
})
test('tests validity of phone number', () => {
    expect(functions.isDate('1/2/13')).toBe(false);
})
test('tests validity of phone number', () => {
    expect(functions.isDate('1/2/2013')).toBe(true);
})
test('tests validity of phone number', () => {
    expect(functions.isDate('13/20/2017')).toBe(true);
})

test('tests validity of phone number', () => {
    expect(functions.isHexColor('#g00')).toBe(false);
})
test('tests validity of phone number', () => {
    expect(functions.isHexColor('#F000')).toBe(false);
})
test('tests validity of phone number', () => {
    expect(functions.isHexColor('#F00')).toBe(true);
})
test('tests validity of phone number', () => {
    expect(functions.isHexColor('#FFFF00')).toBe(true);
})