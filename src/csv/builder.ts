/**
 * @author WMXPY
 * @namespace Numeric_CSV
 * @description Builder
 */

export class CSVBuilder<A extends string[]> {

    public static create<A extends string[]>(...fields: A) {

        return new CSVBuilder<A>(fields);
    }

    private _keys: A;
    private _contents: A[];

    private constructor(fields: A) {

        this._keys = fields;
    }

    public append(row: A) {

        this._contents.push(row);
    }

    public toString(): string {

        return [this._keys.join(','), ...this._contents.map((content) => content.join(','))].join('\n');
    }
}
