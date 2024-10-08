import { AxiosInstance } from "axios";
import { Builder } from "./Builder";
import { AxiosBaseUrl } from "../../../boot/AxiosInstance";

export class ConcretStrategy<T> implements Builder<T> {
    private axios: AxiosInstance;
    constructor() {
        this.axios = AxiosBaseUrl;
    }

    create(entity: T, path: string, data: any): void {}
    update(id: string, entity: T, path: string): void {}
    delete(id: string, path: string): void {}
}