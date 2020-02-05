/**
 * @author WMXPY
 * @namespace Numeric_Unit
 * @description Deconstruction
 */

export const evenlySplitNumber = (target: number, gap: number): number[] => {

    const intTarget: number = Math.floor(target);
    const intGap: number = Math.floor(gap);

    const count: number = Math.floor(intTarget / intGap);
    const result: number[] = [];
    for (let i = 0; i < count; i++) {
        result.push(intGap);
    }

    const rest: number = intTarget - (intGap * count);
    if (rest !== 0) {
        result.push(rest);
    }

    return result;
};
