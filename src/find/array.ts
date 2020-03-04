/**
 * @author WMXPY
 * @namespace Numeric_Find
 * @description Array
 */

import { CloneFunction, MatcherFunction } from "../declare";
import { attemptCloneObject } from "../util";

export const getFirstMatchedElement = <T extends any>(
    target: T[],
    matcher: MatcherFunction<T>,
    cloneFunction?: CloneFunction<T>,
): T | null => {

    const length: number = target.length;
    for (let i = 0; i < length; i++) {
        if (matcher(target[i], i)) {
            return attemptCloneObject(target[i], cloneFunction);
        }
    }
    return null;
};

export const getLastMatchedElement = <T extends any>(
    target: T[],
    matcher: MatcherFunction<T>,
    cloneFunction?: CloneFunction<T>,
): T | null => {

    const length: number = target.length;
    for (let i = length - 1; i >= 0; i--) {
        if (matcher(target[i], i)) {
            return attemptCloneObject(target[i], cloneFunction);
        }
    }
    return null;
};
