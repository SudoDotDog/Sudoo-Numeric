/**
 * @author WMXPY
 * @namespace Numeric
 * @description Util
 */

import { CloneFunction } from "./declare";

export const attemptCloneObject = <T extends any>(object: T, cloneFunction?: CloneFunction<T>): T => {

    if (cloneFunction) {
        return cloneFunction(object);
    }
    return object;
};
