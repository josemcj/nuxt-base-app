<script setup>
import api from '@/lib/axios';
import { onMounted, ref } from 'vue';
import { useForm } from '@/composables/useForm';

const value = defineModel();
const emit = defineEmits(['change']);
const formSelect = useForm().select();

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: true,
  },
});

const elementId = Date.now();
const options = ref(formSelect.loading);

const fetchOptions = async () => {
  try {
    const response = await api.get(props.uri);

    if (response.status === 200) {
      const { data } = response;
      options.value = formSelect.create(data.data);
    }
  } catch (err) {
    options.value = formSelect.createError();
  }
};

onMounted(fetchOptions);
</script>

<template>
  <BFormGroup
    :id="`input-group-${elementId}`"
    :label="label"
    :label-for="`select-${elementId}`"
    label-class="fw-normal"
    class="mb-3">
    <BFormSelect
      :id="`select-${elementId}`"
      v-model="value"
      :options="options"
      :class="className"
      :required="required"
      @change="$emit('change')" />
    <slot />
  </BFormGroup>
</template>
