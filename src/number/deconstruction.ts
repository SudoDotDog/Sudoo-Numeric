/**
 * @author WMXPY
 * @namespace Numeric_Number
 * @description Deconstruction
 */

export const evenlySeparateNumber = (target: number, length: number): number[] => {

    const unit: number = Math.floor(target / length);
    const consumed: number = unit * length;
    const difference: number = target - consumed;

    const result: number[] = [];
    for (let i = 0; i < length; i++) {

        const shouldAdd: boolean = i < difference;
        result.push(shouldAdd ? unit + 1 : unit);
    }
    return result;
};

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

export type SplitNumberBatch = {

    readonly skip: number;
    readonly batch: number;
    readonly count: number;
};

export const splitNumber = (target: number, gap: number): SplitNumberBatch[] => {

    const intTarget: number = Math.floor(target);
    const intGap: number = Math.floor(gap);

    const count: number = Math.floor(intTarget / intGap);

    const result: SplitNumberBatch[] = [];
    for (let i = 0; i < count; i++) {
        result.push({
            skip: i * intGap,
            batch: i,
            count: intGap,
        });
    }

    const rest: number = intTarget - (intGap * count);
    if (rest !== 0) {
        result.push({
            skip: intGap * count,
            batch: count,
            count: rest,
        });
    }

    return result;
};
