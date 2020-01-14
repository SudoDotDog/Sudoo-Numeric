/**
 * @author WMXPY
 * @namespace Numeric_Unit
 * @description Binary
 */

export const transformSize = (size: number, decimals: number = 2): string => {

    if (size < 0) {
        return 'Empty';
    }

    const convert: number = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const level = Math.floor(Math.log(size) / Math.log(convert));
    const value: number = Number((size / Math.pow(convert, level)).toFixed(decimals));

    return `${value} ${sizes[level]}`;
};
