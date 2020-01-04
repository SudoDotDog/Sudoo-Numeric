/**
 * @author WMXPY
 * @namespace Numeric_Math
 * @description Calculate
 */

// tslint:disable-next-line: variable-name
export const UNSAFE_absolute = (target: number): number => {

    // tslint:disable-next-line: no-bitwise no-magic-numbers
    const merged: number = target >> 63;
    // tslint:disable-next-line: no-bitwise
    return (target + merged) ^ merged;
};
