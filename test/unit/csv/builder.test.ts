/**
 * @author WMXPY
 * @namespace Numeric_CSV
 * @description Builder
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { CSVBuilder } from "../../../src";

describe('Given {CSVBuilder} class', (): void => {

    const chance: Chance.Chance = new Chance('numeric-csv-builder');

    it('should be able to convert', (): void => {

        const header1: string = chance.string();
        const header2: string = chance.string();

        const value11: string = chance.string();
        const value12: string = chance.string();

        const value21: string = chance.string();
        const value22: string = chance.string();

        const builder: CSVBuilder<[string, string]> = CSVBuilder.create(header1, header2);
        builder.append(value11, value12);
        builder.append(value21, value22);

        const result: string = builder.toString();
        const expected: string = `${header1},${header2}\n${value11},${value12}\n${value21},${value22}`;

        expect(builder).to.be.lengthOf(2);
        expect(result).to.be.equal(expected);
    });
});
