/**
 * @author WMXPY
 * @namespace Numeric_Array_Calculate
 * @description Average
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { calculateArrayAverage } from "../../../../src";

describe('Given [Array-Calculate-Average] Helper Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-array-calculate-average');

    it('should be able to calculate average of numeric array', (): void => {

        const value1: number = chance.natural();
        const value2: number = chance.natural();
        const value3: number = chance.natural();

        const list: number[] = [value1, value2, value3];

        const average: number = calculateArrayAverage(list);

        expect(average).to.be.equal((value1 + value2 + value3) / 3);
    });
});
