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

    console.log(lines);

    for (const line of lines) {

        const splited: string[] = line.split(',');
        const combined = splited.reduce((previous, current: string) => {

            console.log(previous, current);

            if (current.length === 0) {
                if (previous.quoting) {
                    return previous;
                }
            }

            if (previous.quoting) {
                if (current[current.length - 1] === '"') {
                    return {
                        list: [...previous.list, previous.buffer + current.substring(0, current.length - 1)],
                        quoting: false,
                        buffer: '',
                    };
                }

                return {
                    ...previous,
                    buffer: previous.buffer + current,
                };
            }

            if (current[0] === '"') {
                return {
                    ...previous,
                    quoting: true,
                    buffer: current,
                };
            }

            if (previous.buffer) {
                return {
                    list: [...previous.list, previous.buffer, current],
                    buffer: '',
                    quoting: false,
                };
            }

            return {
                ...previous,
                list: [...previous.list, current],
            };
        }, {
            list: [],
            buffer: '',
            quoting: false,
        } as {
            readonly list: string[];
            readonly buffer: string;
            readonly quoting: boolean;
        });

        const each: string[] = combined.list;
        console.log(each.length, each);

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
