export interface Builder<T>{
    create(entity: T, path: string, data: any): void;
}