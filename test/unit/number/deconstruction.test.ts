/**
 * @author WMXPY
 * @namespace Numeric_Number
 * @description Deconstruction
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { evenlySplitNumber } from "../../../src/number/deconstruction";

describe('Given [Number-Deconstruction] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-number-deconstruction');

    it('should be able to evenly split number', (): void => {

        // tslint:disable-next-line: no-magic-numbers
        const result: number[] = evenlySplitNumber(100, 20);

        expect(result).to.be.deep.equal(
            // tslint:disable-next-line: no-magic-numbers
            [20, 20, 20, 20, 20],
        );
    });

    it('should be able to evenly split number - rest', (): void => {

        // tslint:disable-next-line: no-magic-numbers
        const result: number[] = evenlySplitNumber(110, 20);

        expect(result).to.be.deep.equal(
            // tslint:disable-next-line: no-magic-numbers
            [20, 20, 20, 20, 20, 10],
        );
    });
});
