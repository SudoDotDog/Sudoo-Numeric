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

                return text;
            }).join(',');
        });
        return [keys.join(','), ...contents].join('\n');
    }
    return '';
};
