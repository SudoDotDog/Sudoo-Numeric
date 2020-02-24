/**
 * @author WMXPY
 * @namespace Numeric_Shuffle
 * @description Structure
 */

import { CloneFunction } from "../declare";

export type FieldBasedDeployStructuralArrayElement<T extends Record<string, any> = any, K extends keyof T = any> = {

    readonly fieldName: K;
    readonly fieldValue: T[K];
    readonly children: T[];
};

export const fieldBasedDeployStructuralArray = <T extends Record<string, any>, K extends keyof T>(original: T[], fieldName: K, cloneFunction?: CloneFunction<T>): Array<FieldBasedDeployStructuralArrayElement<T, K>> => {

    const medium: Record<T[K], T[]> = {} as Record<T[K], T[]>;
    if (original.length <= 0) {
        return [];
    }

    const parsed: T[] = cloneFunction ? original.map(cloneFunction) : original;
    for (const each of parsed) {
        const value: T[K] = each[fieldName];
        if (medium[value]) {
            medium[value].push(each);
        } else {
            medium[value] = [each];
        }
    }

    const result: Array<FieldBasedDeployStructuralArrayElement<T, K>> = [];
    const keys: Array<T[K]> = Object.keys(medium) as Array<T[K]>;
    for (const key of keys) {
        result.push({
            fieldName,
            fieldValue: key,
            children: medium[key],
        });
    }

    return result;
};
