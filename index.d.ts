declare module "in-place" {
    let inPlace: InPlace;

    class InPlace {
        public map(array: Array, callback: (item: any, index: number) => void, thisArg?: any): Array;

        public filter(array: Array, callback: (item: any, index: number) => boolean, thisArg?: any): Array;

        public concat(array: Array): Array;

        public deleteIndex(array: Array, index: number): Array;

        public dedupe(array: Array): Array;

        public dedupeSorted(array: Array): Array;
    }

    export default inPlace;
}
