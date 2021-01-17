<template>
  <div class="flex flex-col self-start w-full mb-4 login__form">
    <div class="flex justify-between">
      <label class="pb-1 text-xss">{{ title }}</label>
      <span v-if="hasAditionalInfo" class="font-medium text-primary text-xss">{{
        aditionalText
      }}</span>
    </div>
    <FormulateInput
      :type="inputType"
      :name="title"
      :validation-name="title"
      :validation="validationOptions"
      label-class="pb-1 text-xss"
      input-class="w-full px-2 py-2 bg-gray-100 rounded"
    />
  </div>
</template>

<script>
export default {
  name: 'InputItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: '',
    },
    aditionalText: {
      type: String,
      default: '',
    },
    hasAditionalInfo: {
      type: Boolean,
      default: false,
    },
    validationOptions: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
