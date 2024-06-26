const Currency = require('./Currency');

class Money 
{
    constructor(amount, currency) {
        this.amount = amount;

        if (!(currency instanceof Currency))
            throw new Error('Invalid currency');

        this.currency = currency;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    getCurrency() {
        return this.currency;
    }

    setCurrency(currency) {
        this.currency = currency;
    }

    static createByCurrencyCode(currencyCode, amount) {
        return new Money(amount, new Currency(currencyCode));
    }
}

module.exports = Money;
