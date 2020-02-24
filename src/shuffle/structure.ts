/**
 * @author WMXPY
 * @namespace Numeric_Shuffle
 * @description Structure
 */

export type FieldBasedDeployStructuralArrayElement<T extends Record<string, any>> = {

    readonly fieldName: string;
    readonly fieldValue: any;
    readonly children: T[];
};

export const fieldBasedDeployStructuralArray = <T extends Record<string, any>>(list: T[]): Array<FieldBasedDeployStructuralArrayElement<T>> => {

    const result: Array<FieldBasedDeployStructuralArrayElement<T>> = [];

    return result;
};
