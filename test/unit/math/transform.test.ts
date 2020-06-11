/**
 * @author WMXPY
 * @namespace Numeric_Math
 * @description Transform
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
// eslint-disable-next-line camelcase
import { UNSAFE_transformToInteger } from "../../../src/math/transform";

describe('Given [Math-Transform] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-math-transform');

    it('should be able to transform to integer', (): void => {

        const testNumber = chance.floating({
            min: -10000,
            max: 10000,
        });

        const result: number = UNSAFE_transformToInteger(testNumber);
        const firstPart: string = testNumber.toString().split('.')[0] as string;

        expect(result).to.be.equal(Number(firstPart));
    });
});
