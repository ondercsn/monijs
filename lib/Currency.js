export default class Currency 
{
    currencies = {
        'eur': {'code':'EUR', 'name':'Euro', 'sign':'€', 'isoCode': 978},
        'usd': {'code':'USD', 'name':'US Dollar', 'sign':'$', 'isoCode': 840},
        'brl': {'code':'BRL', 'name':'Brazilian Real', 'sign':'R$', 'isoCode': 840},
    }

    euroZoneCountryCodes = ['AT','BE','CY','EE','FI','FR','DE','GR','IE','IT','LV','LT','LU','MT','NL','PT','SK','SI','ES', 'CH','DK','PL','HU','SE','NO'];

	
    constructor(code) {
        code = code.toLowerCase();

        if (typeof code !== 'string' || code === '')
            throw new Error('Currency code should be a string');

        if (!(code in this.currencies))
            throw new Error('Invalid Currency');

        this.code = code;
    }

    getCode() {
        return this.code;
    }

    getName() {
        return this.currencies[this.code]['name'];
    }

    getSign() {
        return this.currencies[this.code]['sign'];
    }

    getIsoCode() {
        return this.currencies[this.code]['isoCode'];
    }

    static getCurrencies() {
        return this.currencies;
    }

    static isEuroZone(countryCode) {
        return this.euroZoneCountryCodes.includes(countryCode);
    }

    toArray() {
        return {
            'code': this.code,
            'name': this.getName(),
            'sign': this.getSign(),
            'isoCode': this.getIsoCode()
        };
    }

}