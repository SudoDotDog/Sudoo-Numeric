/**
 * @author WMXPY
 * @namespace Numeric_CSV
 * @description Builder
 */

export class CSVBuilder<A extends string[]> {

    public static create<A extends string[]>(...fields: A) {

        return new CSVBuilder<A>(fields);
    }

    private readonly _keys: A;
    private readonly _contents: A[];

    private constructor(fields: A) {

        this._keys = fields;
        this._contents = [];
    }

    public get length(): number {

        return this._contents.length;
    }

    public append(...row: A): this {

        this._contents.push(row);
        return this;
    }

    public row(row: A): this {

        this._contents.push(row);
        return this;
    }

    public toString(): string {

        return [this._keys.join(','), ...this._contents.map((content) => content.join(','))].join('\n');
    }
}
