/**
 * @author WMXPY
 * @namespace Numeric_Number
 * @description Deconstruction
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { evenlySplitNumber, splitNumber, SplitNumberBatch } from "../../../src/number/deconstruction";

// tslint:disable: no-magic-numbers
describe('Given [Number-Deconstruction] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-number-deconstruction');

    it('should be able to evenly split number', (): void => {

        const result: number[] = evenlySplitNumber(100, 20);
        expect(result).to.be.deep.equal(
            [20, 20, 20, 20, 20],
        );
    });

    it('should be able to evenly split number - rest', (): void => {

        const result: number[] = evenlySplitNumber(110, 20);
        expect(result).to.be.deep.equal(
            [20, 20, 20, 20, 20, 10],
        );
    });

    it('should be able to batch split number', (): void => {

        const result: SplitNumberBatch[] = splitNumber(40, 20);
        expect(result).to.be.deep.equal([
            { batch: 0, skip: 0, count: 20 },
            { batch: 1, skip: 20, count: 20 },
        ] as SplitNumberBatch[]);
    });

    it('should be able to evenly split number - rest', (): void => {

        const result: SplitNumberBatch[] = splitNumber(45, 20);
        expect(result).to.be.deep.equal([
            { batch: 0, skip: 0, count: 20 },
            { batch: 1, skip: 20, count: 20 },
            { batch: 2, skip: 40, count: 5 },
        ] as SplitNumberBatch[]);
    });
});
// tslint:enable: no-magic-numbers
