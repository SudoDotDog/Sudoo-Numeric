/**
 * @author WMXPY
 * @namespace Numeric_Find
 * @description Array
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { findFirstMatchedElement, findLastMatchedElement } from "../../../src";

type ExampleObject = {
    readonly value: number;
    readonly index: number;
};

describe('Given [Find-Array] Help Function', (): void => {

    const chance: Chance.Chance = new Chance('numeric-find-array');

    it('should be able to find the first element', (): void => {

        const element: number = chance.natural();
        const target: ExampleObject[] = [{
            value: chance.natural(),
            index: 0,
        }, {
            value: element,
            index: 1,
        }, {
            value: element,
            index: 2,
        }];

        const result: ExampleObject | null = findFirstMatchedElement(target, (each: ExampleObject) => each.value === element);

        expect(result).to.be.deep.equal({
            value: element,
            index: 1,
        });
    });

    it('should be able to find the first element to null', (): void => {

        const target: ExampleObject[] = [{
            value: chance.natural(),
            index: 0,
        }, {
            value: chance.natural(),
            index: 1,
        }];

        const result: ExampleObject | null = findFirstMatchedElement(target, (each: ExampleObject) => each.value === chance.natural());

        // tslint:disable-next-line: no-unused-expression
        expect(result).to.be.null;
    });

    it('should be able to find the last element', (): void => {

        const element: number = chance.natural();
        const target: ExampleObject[] = [{
            value: chance.natural(),
            index: 0,
        }, {
            value: element,
            index: 1,
        }, {
            value: element,
            index: 2,
        }];

        const result: ExampleObject | null = findLastMatchedElement(target, (each: ExampleObject) => each.value === element);

        expect(result).to.be.deep.equal({
            value: element,
            index: 2,
        });
    });

    it('should be able to find the last element to null', (): void => {

        const target: ExampleObject[] = [{
            value: chance.natural(),
            index: 0,
        }, {
            value: chance.natural(),
            index: 1,
        }];

        const result: ExampleObject | null = findLastMatchedElement(target, (each: ExampleObject) => each.value === chance.natural());

        // tslint:disable-next-line: no-unused-expression
        expect(result).to.be.null;
    });
});
