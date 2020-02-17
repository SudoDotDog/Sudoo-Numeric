/**
 * @author WMXPY
 * @namespace Numeric_Shuffle
 * @description Array
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { evenlyDeployArray } from "../../../src/shuffle/array";

// tslint:disable: no-magic-numbers
describe('Given [Shuffle-Array] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-shuffle-array');

    it('should be able to evenly deploy array', (): void => {

        const original: string[] = [
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
        ];

        const result: string[][] = evenlyDeployArray(original, 3);
        expect(result).to.be.deep.equal([
            [original[0], original[3]],
            [original[1], original[4]],
            [original[2], original[5]],
        ]);
    });

    it('should be able to evenly deploy array - lack', (): void => {

        const original: string[] = [
            chance.string(),
            chance.string(),
        ];

        const result: string[][] = evenlyDeployArray(original, 3);
        expect(result).to.be.deep.equal([
            [original[0]],
            [original[1]],
            [],
        ]);
    });

    it('should be able to evenly deploy array - rest', (): void => {

        const original: string[] = [
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
        ];

        const result: string[][] = evenlyDeployArray(original, 3);
        expect(result).to.be.deep.equal([
            [original[0], original[3], original[6]],
            [original[1], original[4]],
            [original[2], original[5]],
        ]);
    });

    it('should be able to evenly deploy array - clone', (): void => {

        const original: string[] = [
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
            chance.string(),
        ];

        const result: string[][] = evenlyDeployArray(original, 3, (target: string) => target + '!');
        expect(result).to.be.deep.equal([
            [original[0], original[3]],
            [original[1], original[4]],
            [original[2], original[5]],
        ].map((value: string[]) => value.map((each: string) => each + '!')));
    });
});
// tslint:enable: no-magic-numbers
