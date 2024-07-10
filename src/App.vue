<template>
  <div class="container-elements">
    <div
      v-for="(schemaInput, idx) in vueformDataSchema"
      :key="`${schemaInput.name}_${idx}`"
      @click="formStore.setNewInput(schemaInput)"
    >
      {{ schemaInput.label }}
    </div>
  </div>
  <div class="container-elements">
    <div
      v-for="(schemaInput) in vueformSchema"
      :key="schemaInput.name"
      @click="formStore.deleteElement(schemaInput.name)"
    >
      {{ schemaInput.name }}
    </div>
  </div>
  <div class="container-elements">
    <Vueform :schema="vueformSchema" @change="handlerChange" />
  </div>
  <div class="container-elements">
    <h1>Значения в полях</h1>
    {{ values }}
  </div>
  <div class="container-elements">
    <h1>Схема полей</h1>
    {{ vueformSchema }}
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { formGeneratorStore } from './store/formGeneratorStore';
import { VueformSchema } from '@vueform/vueform';

const formStore = formGeneratorStore();

const values = ref<VueformSchema>();
const vueformDataSchema = computed(() => formStore.getDataSchema);
const vueformSchema = computed(() => formStore.getSchemaForm);
const handlerChange = (value: VueformSchema) => {
  values.value = value;
}
</script>