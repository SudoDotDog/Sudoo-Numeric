/**
 * @author WMXPY
 * @namespace Numeric_Math
 * @description Calculate
 */

// eslint-disable-next-line camelcase
export const UNSAFE_absolute = (target: number): number => {

    // eslint-disable-next-line no-bitwise,@typescript-eslint/no-magic-numbers
    const merged: number = target >> 63;
    // eslint-disable-next-line no-bitwise
    return (target + merged) ^ merged;
};
