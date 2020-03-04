/**
 * @author WMXPY
 * @namespace Numeric_Find
 * @description Array
 */

import { CloneFunction, MatcherFunction } from "../declare";

export const getFirstMatchedElement = <T extends any>(target: T[], matcher: MatcherFunction<T>, cloneFunction?: CloneFunction<T>): T | null => {

    const length: number = target.length;
    for (let i = 0; i < length; i++) {
        if (matcher(target[i], i)) {
            if (cloneFunction) {
                return cloneFunction(target[i]);
            }
            return target[i];
        }
    }
    return null;
};
