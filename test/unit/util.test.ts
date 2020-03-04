/**
 * @author WMXPY
 * @namespace Numeric
 * @description Util
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { attemptCloneObject, CloneFunction } from "../../src";

describe('Given [Util] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-util');

    it('should be able to clone with a clone function', (): void => {

        const element: number = chance.natural();
        const cloneFunction: CloneFunction<number> = (object: number) => object + 1;

        const result: number = attemptCloneObject(element, cloneFunction);

        expect(result).to.be.equal(element + 1);
    });

    it('should be able to clone without a clone function', (): void => {

        const element: number = chance.natural();

        const result: number = attemptCloneObject(element);

        expect(result).to.be.equal(element);
    });
});
