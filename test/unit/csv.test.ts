/**
 * @author WMXPY
 * @namespace Numeric
 * @description CSV
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { CSVToObject, objectToCSV } from "../../src";

describe('Given [CSV] helper methods', (): void => {

    const chance: Chance.Chance = new Chance('numeric-csv');

    it('should be able to convert', (): void => {

        const header1: string = chance.string();
        const header2: string = chance.string();

        const value11: string = chance.string();
        const value12: string = chance.string();

        const value21: string = chance.string();
        const value22: string = chance.string();

        const target = [{
            [header1]: value11,
            [header2]: value12,
        }, {
            [header1]: value21,
            [header2]: value22,
        }];

        const result: string = objectToCSV(target);
        const expected: string = `${header1},${header2}\n${value11},${value12}\n${value21},${value22}`;

        expect(result).to.be.equal(expected);

        const reversed = CSVToObject(result);
        expect(reversed).to.be.deep.equal(target);
    });

    it('should be able to convert with space', (): void => {

        const header1: string = chance.string();
        const header2: string = chance.string();

        const value11: string = chance.string() + ' ' + chance.string();
        const value12: string = chance.string();

        const value21: string = chance.string();
        const value22: string = chance.string();

        const target = [{
            [header1]: value11,
            [header2]: value12,
        }, {
            [header1]: value21,
            [header2]: value22,
        }];

        const result: string = objectToCSV(target);
        const expected: string = `${header1},${header2}\n"${value11}",${value12}\n${value21},${value22}`;

        expect(result).to.be.equal(expected);

        const reversed = CSVToObject(result);
        expect(reversed).to.be.deep.equal(target);
    });
});
