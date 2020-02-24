/**
 * @author WMXPY
 * @namespace Numeric_Shuffle
 * @description Structure
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { fieldBasedDeployStructuralArray, FieldBasedDeployStructuralArrayElement } from "../../../src/shuffle/structure";

describe('Given [Shuffle-Structure] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-shuffle-structure');

    it('should be able to evenly deploy structure array', (): void => {

        const anchor: string = chance.string();
        const secondAnchor: string = chance.string();
        const original = [{
            anchor,
            b: chance.string(),
        }, {
            anchor,
            b: chance.string(),
        }, {
            anchor: secondAnchor,
            b: chance.string(),
        }];

        const result: FieldBasedDeployStructuralArrayElement[] = fieldBasedDeployStructuralArray(original, 'anchor');

        expect(result).to.be.deep.equal([
            {
                fieldName: 'anchor',
                fieldValue: anchor,
                children: [original[0], original[1]],
            },
            {
                fieldName: 'anchor',
                fieldValue: secondAnchor,
                children: [original[2]],
            },
        ] as FieldBasedDeployStructuralArrayElement[]);
    });
});
