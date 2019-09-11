import { parseCSVLine } from "./util";

/**
 * @author WMXPY
 * @namespace Numeric
 * @description CSV
 */

export const objectToCSV = (obj: Array<Record<string, string | number>>): string => {

    if (obj.length > 0) {

        const keys: string[] = Object.keys(obj[0]);
        const contents: string[] = obj.map((current: Record<string, string | number>) => {
            return Object.keys(current).map((key: string) => {

                const text: string = current[key].toString();
                if (text.includes(' ')) {
                    return `"${text}"`;
                }

                if (text.includes(',')) {
                    return `"${text}"`;
                }

                return text;
            }).join(',');
        });
        return [keys.join(','), ...contents].join('\n');
    }
    return '';
};



export const CSVToObject = (csv: string): Array<Record<string, string>> => {

    const lines: string[] = csv.split(/\r\n|\n/);
    if (lines.length < 2) {
        return [];
    }

    const firstLine: string = lines.shift() as string;
    const headers: string[] = firstLine.split(',');
    const result: Array<Record<string, string>> = [];

    for (const line of lines) {

        const each: string[] = parseCSVLine(line);
        if (each.length !== headers.length) {
            return [];
        }
        result.push(each.reduce((previous: Record<string, string>, current: string, index: number) => {

            const parsed: string = current.replace(/^"/, '').replace(/"$/, '');

            return {
                ...previous,
                [headers[index]]: parsed,
            };
        }, {}));
    }

    return result;
};
