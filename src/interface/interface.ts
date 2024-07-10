import { VueformSchema } from "@vueform/vueform";

export interface IFormGeneratorStore {
    schema:     VueformSchema[];
    schemaForm: VueformSchema[];
}

export interface IFormGeneratorStoreSchema {
    [key:string]: VueformSchema;
}
