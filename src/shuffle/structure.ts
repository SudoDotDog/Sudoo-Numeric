/**
 * @author WMXPY
 * @namespace Numeric_Shuffle
 * @description Structure
 */

import { CloneFunction } from "../declare";

export type FieldBasedDeployStructuralArrayElement<T extends Record<string, any>, K extends keyof T> = {

    readonly fieldName: K;
    readonly fieldValue: T[K];
    readonly children: T[];
};

export const fieldBasedDeployStructuralArray = <T extends Record<string, any>, K extends keyof T>(original: T[], fieldName: K, cloneFunction?: CloneFunction<T>): Array<FieldBasedDeployStructuralArrayElement<T, K>> => {

    const result: Array<FieldBasedDeployStructuralArrayElement<T, K>> = [];
    if (original.length <= 0) {
        return result;
    }

    const parsed: T[] = cloneFunction ? original.map(cloneFunction) : original;

    return result;
};
