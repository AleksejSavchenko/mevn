<template>
  <div class="mb-3">
    <input :placeholder="placeholder"
           :type="type"
           :value="value"
           @blur="$emit('blur')"
           @change="$emit('input', $event.target.value)"
           @focus="$emit('focus')"
           @input="$emit('input', $event.target.value)"
           class="w-full text-xs bg-gray-200 p-3 focus:outline-none text-gray-800"
    >

    <span v-if="error" class="text-red-600 text-xs">{{ error }}</span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    error: {
      type: String,
      required: false
    }
  },
  name: 'TextInput'
}
</script>

<style scoped>

</style>
