import { Decimal } from 'decimal.js';
class Core {
    numberToDecimal(value, errorValue = new Decimal(0).toDecimalPlaces(0)) {
        const invalid = value == null || Number.isNaN(value) || new Decimal(value).isNaN();
        if (!invalid) {
            const epsilon = new Decimal(Number.EPSILON);
            return new Decimal(value).plus(epsilon);
        }
        else {
            return errorValue;
        }
    }
}
export const NumberParse = new Core();
//# sourceMappingURL=core-services-number.service.js.map