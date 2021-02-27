const { TestScheduler } = require('jest')
const formatVolumeIconPath = require('../assets/scripts/main')

describe('Test formatVolumeIconPath function', () => {
    test('volume above 66', () =>{
        expect(formatVolumeIconPath(67)).toContain('3');
    });
    test('volume between 34 and 66', () => {
        expect(formatVolumeIconPath(34)).toContain('2');
    });
    test('volume between 1 and 33', () => {
        expect(formatVolumeIconPath(1)).toContain('1');
    });
    test('volume at 0', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});