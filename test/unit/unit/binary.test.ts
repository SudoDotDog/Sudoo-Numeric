/**
 * @author WMXPY
 * @namespace Numeric_Math
 * @description Binary
 * @override Unit Test
 */

import { expect } from "chai";
import { transformSize } from "../../../src/unit/binary";

describe('Given [Unit-Binary] Help Function', (): void => {

    it('should be able to transform bytes size to string - bytes', (): void => {

        const size: number = 100;
        const result: string = transformSize(size);

        expect(result).to.be.equal('100 Bytes');
    });

    it('should be able to transform bytes size to string - kb', (): void => {

        const size: number = 6582;
        const result: string = transformSize(size);

        expect(result).to.be.equal('6.43 KB');
    });

    it('should be able to transform bytes size to string - mb', (): void => {

        const size: number = 1276582;
        const result: string = transformSize(size);

        expect(result).to.be.equal('1.22 MB');
    });
});
