declare module "in-place" {
    export function map(array: Array<any>, callback: (item: any, index: number) => void, thisArg?: any): Array<any>;

    export function filter(array: Array<any>, callback: (item: any, index: number) => boolean, thisArg?: any): Array<any>;

    export function concat(array: Array<any>): Array<any>;

    export function deleteIndex(array: Array<any>, index: number): Array<any>;

    export function dedupe(array: Array<any>): Array<any>;

    export function dedupeSorted(array: Array<any>): Array<any>;
}
