const main = require('../main/main');

describe('main()', () => {
    it('should print stats', () => {
        spyOn(console, 'log');
        main();
        expect(console.log).toHaveBeenCalledWith(`o) 最小值 = -2
o) 最大值 = 92
o) 元素数量 = 6
o) 平均值 = 21.83`);
    });
});
