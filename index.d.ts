interface CarType {
    model: string;
}
declare class Car implements CarType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 붕붕이: Car;
interface UserType {
    [key: string]: string;
}
declare let user: UserType;
interface MyType {
    'font-size': MyType | number;
}
declare let css: MyType;
interface OType {
    [key: string]: string | number;
}
declare let obj: OType;
interface O2Type {
    'font-size': number;
    [key: string]: O2Type | number;
}
declare let obj2: O2Type;
declare let obj3: {
    name: string;
    age: number;
};
interface Person {
    [key: string]: number;
}
type PersonKeys = keyof Person;
declare let aa: PersonKeys;
type Car2 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
type newType = TypeChanger<Car2>;
declare let 새로운거: newType;
type Bus = {
    color: string;
    model: boolean;
    price: number;
};
type TypeChanger2<MyType> = {
    [key in keyof MyType]: string | number;
};
type newType2 = TypeChanger2<Bus>;
type TypeChanger3<MyType, T> = {
    [key in keyof MyType]: T;
};
type NewBus = TypeChanger3<Bus, boolean>;
type NewBus2 = TypeChanger3<Bus, string[]>;
type Age<T> = T extends string ? string : unknown;
declare let a1: Age<string>;
declare let a2: Age<number>;
type FirstItem<T> = T extends any[] ? T[0] : any;
declare let x1: FirstItem<string[]>;
declare let x2: FirstItem<number>;
type 타입추출<T> = T extends (() => infer R) ? R : unknown;
type b = 타입추출<() => void>;
type c = ReturnType<() => void>;
type Age1<T> = T extends [string, ...any] ? T[0] : unknown;
declare let age1: Age1<[string, number]>;
declare let age2: Age1<[boolean, number]>;
type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
type y = 타입뽑기<(x: number) => void>;
type z = 타입뽑기<(x: string) => void>;
