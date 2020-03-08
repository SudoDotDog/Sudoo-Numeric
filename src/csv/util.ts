/**
 * @author WMXPY
 * @namespace Numeric_CSV
 * @description Util
 */

export const parseCSVLine = (line: string): string[] => {

    const result: string[] = [];
    let quoting: boolean = false;
    let buffer: string = '';

    for (const char of line) {

        if (char === ',') {

            if (quoting) {
                buffer += char;
            } else {
                result.push(buffer);
                buffer = '';
            }
            continue;
        }
        if (char === '"') {

            if (quoting) {
                quoting = false;
            } else {
                quoting = true;
            }
            continue;
        }
        buffer += char;
    }

    result.push(buffer);
    return result;
};
