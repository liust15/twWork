const printInventory = require('../main/main');

describe('pos', () => {
    var inputs;

    beforeEach(() => {
        inputs = [
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000001',
            'ITEM000001',
            'ITEM000004'
        ];
    });

    it('should print correct text', () => {


        let actualText = printInventory(inputs);

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
            '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
            '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +
            '----------------------\n' +
            '总计：23.00(元)\n' +
            '**********************';

        expect(actualText).toBe(expectText);
    });
});