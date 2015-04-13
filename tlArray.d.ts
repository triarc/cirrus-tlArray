interface Array<T> {
    any(): boolean;
    get(index: number): T;
    first(): T;
    last(): T;
    add(object: T): void;
    addRange(objects: Array<T>, prepend?: boolean): void;
    clear(): void;
    insert(index: number, object: T): void;
    indexOfObj(compareFn: (object: T) => any, value: any): number;
    remove(object: T): boolean;
    removeRange(object: T[]): boolean;
    removeWhere(compareFn: (object: T) => any, object: T): boolean;
    removeWhereMatch(compareFn: (object: T) => boolean): boolean;
    removeAt(index: number): void;
    contains(object: T): boolean;
    containsWhere(compareFn: (object: T) => any, object: T): boolean;
    clone(): Array<T>;
    replaceAt(index: number, object: T): void;
    replaceWhere(accessFn: (object: T) => any, object: T): void;
    addOrUpdate(accessFn: (object: T) => any, object: T, allFn?: (object: boolean) => boolean): boolean;
    getUnique(): Array<T>;
    toEnumerable(): linqjs.IEnumerable<T>;
}
interface Map<K, V> {
    values(): V[];
}
