import { VueformSchema } from '@vueform/vueform';
import { IFormGeneratorStore, IFormGeneratorStoreSchema } from '../interface/interface';
import { defineStore } from 'pinia';

export const formGeneratorStore = defineStore('formGeneratorStore', {
  state: (): IFormGeneratorStore => ({
    schema: [
        {
            type: 'text',
            label: 'Имя',
            name: 'first_name',
        },
        {
          type: 'text',
          label: 'Фамилия',
          name: 'last_name',
        },
        {
          type: 'text',
          label: 'Отчество',
          name: 'second_name',
        },
        {
          type: 'date',
          label: 'Дата документа',
          name: 'document_date',
        },
        {
          type: 'date',
          label: 'Дата создания',
          name: 'create_date',
        },
        {
          type: 'text',
          label: 'Тема',
          name: 'theme',
        },
        {
          type: 'phone',
          label: 'Телефон',
          placeholder: '+7(ххх) ххх хх хх',
          floating: false,
          allowIncomplete: true,
          unmask: true,
          name: 'phone',
        },
        {
          type: 'tags',
          items: [
            { value: 'Вася', label: 'Вася' },
            { value: 'Ирина', label: 'Ирина' },
            { value: 'Ержан', label: 'Ержан' },
          ],
          name: 'coordinating',
        },
        {
          type: 'select',
          name: 'select',
          label: 'Тип документа',
          items: [
            { value: 'Распорядительные', label: 'Распорядительные' },
            { value: 'Нормативные', label: 'Нормативные' },
            { value: 'Финансово-бухгалтерские', label: 'Финансово-бухгалтерские' },
          ],
        },
      ],
    schemaForm: [],
  }),
  getters: {
    getDataSchema(): VueformSchema[] {
        return this.schema;
    },
    getSchemaForm(): IFormGeneratorStoreSchema {
        return this.schemaForm.reduce((prev, current) => {
          return {
            [current.name]: {
              ...current,
              name: current.name
            },
            ...prev
          }
        }, {

        });
    },
  },
  actions: {
    setNewInput(inputData: VueformSchema) {
      const newIndex = this.schemaForm.length;
      this.schemaForm.push({
        ...inputData,
        name: `${inputData.name}_${newIndex}`
      });
    },
    deleteElement(name: string) {
      this.schemaForm = this.schemaForm.filter(element => element.name !== name);
    }
  }
});