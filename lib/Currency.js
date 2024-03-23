class Currency 
{

    constructor(code) {
        code = code.toLowerCase();

        if (typeof code !== 'string' || code === '')
            throw new Error('Currency code should be a string');

        if (!(code in Currency.getCurrencies()))
            throw new Error('Invalid Currency');

        this.currency = Currency.getCurrencies()[code];
    }

    static euroZoneCountryCodes() {
        return ['AT','BE','CY','EE','FI','FR','DE','GR','IE','IT','LV','LT','LU','MT','NL','PT','SK','SI','ES', 'CH','DK','PL','HU','SE','NO'];
    }

    static getCurrencies() {
        return {
            'eur': {'code':'EUR', 'name':'Euro', 'sign':'€', 'isoCode': 978},
            'usd': {'code':'USD', 'name':'US Dollar', 'sign':'$', 'isoCode': 840},
            'brl': {'code':'BRL', 'name':'Brazilian Real', 'sign':'R$', 'isoCode': 840},
        };
    }


    getCode() {
        return this.currency["code"];
    }

    getName() {
        return this.currency['name'];
    }

    getSign() {
        return this.currency['sign'];
    }

    getIsoCode() {
        return this.currency['isoCode'];
    }

    
    static isEuroZone(countryCode) {
        return Currency.euroZoneCountryCodes.includes(countryCode);
    }

    toArray() {
        return {
            'code': this.getCode(),
            'name': this.getName(),
            'sign': this.getSign(),
            'isoCode': this.getIsoCode()
        };
    }
}

module.exports = Currency;