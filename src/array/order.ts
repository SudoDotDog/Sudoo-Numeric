/**
 * @author WMXPY
 * @namespace Numeric_Array
 * @description Order
 */

export const car = <T extends any>(target: T[]): T => {

    if (target.length <= 0) {
        return null as any;
    }
    return target[0] as T;
};

export const cdr = <T extends any>(target: T[]): T[] => {

    if (target.length <= 1) {
        return [];
    }
    return target.slice(1);
};

export const last = <T extends any>(target: T[]): T => {

    if (target.length <= 0) {
        return null as any;
    }
    return target[target.length - 1] as T;
};
