export type Constructor<T> = new (...args: any[]) => T;

export type Comparator<T> = (first: T, second: T) => number;
