/**
 * @author WMXPY
 * @namespace Numeric_Array_Calculate
 * @description Average
 */

import { ExtractFeatureFunction } from "../../declare";

export const calculateArrayAverage = <T extends any = any>(list: T[], extractFeatureFunction?: ExtractFeatureFunction<T, number>): number => {

    if (!Array.isArray(list)) {
        return NaN;
    }

    const total: number = list.reduce((previous: number, current: T) => {

        if (typeof extractFeatureFunction === 'function') {

            const extractValue: number = extractFeatureFunction(current);

            if (typeof extractValue === 'number') {
                return previous + extractValue;
            }
            return NaN;
        }

        if (typeof current === 'number') {

            return previous + current;
        }
        return NaN;
    }, 0);

    if (isNaN(total)) {
        return NaN;
    }

    return total / list.length;
};
