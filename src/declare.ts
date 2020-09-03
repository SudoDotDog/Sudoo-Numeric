/**
 * @author WMXPY
 * @namespace Numeric
 * @description Declare
 */

export type ExtractFeatureFunction<T, F> = (object: T) => F;

export type CloneFunction<T> = (object: T) => T;
export type MatcherFunction<T> = (object: T, index: number) => boolean;
export type PureMatcherFunction<T> = (object: T) => boolean;
