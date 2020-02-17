/**
 * @author WMXPY
 * @namespace Numeric_Shuffle
 * @description Array
 */

import { CloneFunction } from "../declare";

export const evenlyDeployArray = <T extends any = any>(original: T[], length: number, cloneFunction?: CloneFunction<T>): T[][] => {

    const result: T[][] = [];
    if (length <= 0) {
        return result;
    }

    const parsed: T[] = cloneFunction ? original.map(cloneFunction) : original;
    for (let i = 0; i < length; i++) {
        result.push([]);
    }
    for (let i = 0; i < parsed.length; i++) {
        const target: number = i % length;
        result[target].push(parsed[i]);
    }

    return result;
};
