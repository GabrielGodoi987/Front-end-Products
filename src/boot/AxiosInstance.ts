import axios, { AxiosInstance } from "axios";

declare module '@vue/runtime-core'{
    interface ComponentCostomProperties{
        $axios: AxiosInstance
    }
}

const AxiosBaseUrl = axios.create({
    baseURL: "http://localhost:8080"
});

export { AxiosBaseUrl };