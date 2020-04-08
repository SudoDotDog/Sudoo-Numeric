/**
 * @author WMXPY
 * @namespace Numeric_Array
 * @description Order
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { car, cdr, last } from "../../../src/array/order";

describe('Given [Array-Order] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-array-order');

    it('should be able to find first element', (): void => {

        const value1: number = chance.natural();
        const value2: number = chance.natural();
        const value3: number = chance.natural();

        const list: number[] = [value1, value2, value3];

        const first: number = car(list);

        expect(first).to.be.equal(value1);
    });

    it('should be able to find first element - sad path', (): void => {

        const list: number[] = [];

        const first: number = car(list);

        // tslint:disable-next-line: no-unused-expression
        expect(first).to.be.null;
    });

    it('should be able to find rest elements', (): void => {

        const value1: number = chance.natural();
        const value2: number = chance.natural();
        const value3: number = chance.natural();

        const list: number[] = [value1, value2, value3];

        const rest: number[] = cdr(list);

        expect(rest).to.be.deep.equal([value2, value3]);
    });

    it('should be able to find last element', (): void => {

        const value1: number = chance.natural();
        const value2: number = chance.natural();
        const value3: number = chance.natural();

        const list: number[] = [value1, value2, value3];

        const lastValue: number = last(list);

        expect(lastValue).to.be.equal(value3);
    });

    it('should be able to find first element - sad path', (): void => {

        const list: number[] = [];

        const lastValue: number = last(list);

        // tslint:disable-next-line: no-unused-expression
        expect(lastValue).to.be.null;
    });
});
