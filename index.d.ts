declare module "in-place" {
    let inPlace: InPlace;

    class InPlace {
        public map(array: Array<any>, callback: (item: any, index: number) => void, thisArg?: any): Array<any>;

        public filter(array: Array<any>, callback: (item: any, index: number) => boolean, thisArg?: any): Array<any>;

        public concat(array: Array<any>): Array<any>;

        public deleteIndex(array: Array<any>, index: number): Array<any>;

        public dedupe(array: Array<any>): Array<any>;

        public dedupeSorted(array: Array<any>): Array<any>;
    }

    export default inPlace;
}
