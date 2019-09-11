/**
 * @author WMXPY
 * @namespace Numeric
 * @description Util
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { parseCSVLine } from "../../src/util";

describe('Given [Util] helper methods', (): void => {

    const chance: Chance.Chance = new Chance('numeric-util');

    it('should be able to parse csv line', (): void => {

        const value1: string = chance.name();
        const value2: string = chance.name();

        const concat: string = `${value1},${value2}`;
        const result: string[] = parseCSVLine(concat);

        expect(result).to.be.deep.equal([value1, value2]);
    });
});
