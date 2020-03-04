/**
 * @author WMXPY
 * @namespace Numeric
 * @description Declare
 */

export type CloneFunction<T extends any = any> = (object: T) => T;
export type MatcherFunction<T extends any = any> = (object: T, index: number) => boolean;
export type PureMatcherFunction<T extends any = any> = (object: T) => boolean;

