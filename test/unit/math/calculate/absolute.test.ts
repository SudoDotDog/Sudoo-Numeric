/**
 * @author WMXPY
 * @namespace Numeric_Math_Calculate
 * @description Absolute
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { UNSAFE_absolute } from "../../../../src/math/calculate";

describe('Given [Math-Absolute] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-math-absolute');

    it('should be able to calculate absolute', (): void => {

        const testNumber = chance.natural({
            min: 10000,
            max: 10000,
        });

        const result: number = UNSAFE_absolute(-testNumber);

        expect(result).to.be.equal(testNumber);
    });
});
