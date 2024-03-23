//require('jest');
const Currency = require('../Currency');
const Money = require('../Money');


describe('Money', () => {
    it('should create a new Money object', () => {
        const money = new Money(100, new Currency('USD'));
        expect(money.getAmount()).toBe(100);
        expect(money.getCurrency()).toBeInstanceOf(Currency);
        expect(money.getCurrency().getCode()).toBe('USD');
    });
    
    it('should create a new Money object by currency code', () => {
        const money = Money.createByCurrencyCode('USD', 100);
        expect(money.getAmount()).toBe(100);
        expect(money.getCurrency()).toBeInstanceOf(Currency);
        expect(money.getCurrency().getCode()).toBe('USD');
    });
});
