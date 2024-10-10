export interface Builder<T>{
    create(entity: T, path: string, data: any): void;
    delete(id: string, path: string): void;
    update(id: string, entity: T, path: string): void;
}