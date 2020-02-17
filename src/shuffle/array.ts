/**
 * @author WMXPY
 * @namespace Numeric_Shuffle
 * @description Array
 */

import { CloneFunction } from "../declare";

export const evenlyDeployArray = <T extends any = any>(original: T[], length: number, cloneFunction?: CloneFunction<T>): T[][] => {

    const result: T[][] = [];

    for (let i = 0; i < length; i++) {
        result.push([]);
    }

    for (let i = 0; i < original.length; i++) {
        const target: number = i % length;
        result[target].push(cloneFunction ? cloneFunction(original[i]) : original[i]);
    }

    return result;
};
