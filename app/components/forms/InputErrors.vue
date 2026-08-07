<script setup>
defineProps({
  errors: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div v-for="error of errors" :key="error.$id" class="invalid-feedback">
    <span>{{ error.$message }}</span>
  </div>
</template>
