import * as dumb from '../index';

describe('Test dumbCalc', () => {
    test('1 + 2 should return numbers sum (3)', () => {
        expect(dumb.dumbCalc(1, 2)).toStrictEqual(3);
    });

    test('NaN + NaN should return 0', () => {
        expect(dumb.dumbCalc(NaN, NaN)).toStrictEqual(0);
    });
});

describe('Test dumbPrint', () => {
    test('Should return string = Hello-World', () => {
        expect(dumb.dumbPrint('Hello', 'World')).toStrictEqual('Hello-World');
    });
});

