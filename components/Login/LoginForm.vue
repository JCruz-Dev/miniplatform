<template>
  <FormulateForm
    v-model="formData"
    class="w-full"
    name="login"
    @submit="submit"
  >
    <input-item
      input-type="email"
      title="Email"
      :validation-options="validateEmailOptions"
    />
    <input-item
      input-type="password"
      title="Contraseña"
      :validation-options="validatePasswordOptions"
      :has-aditional-info="true"
      aditional-text="¿Se te olvidó tu contraseña?"
    />
    <FormulateInput
      type="submit"
      label="Iniciar Sesión"
      class="w-full py-2 mx-auto mb-4 text-sm font-medium text-center text-white delay-100 rounded bg-primary hover:bg-black3"
    />
    <div class="text-center">
      <span class="text-xss">¿Nuevo en Talently? </span>
      <nuxt-link to="/register" class="text-primary text-xss"
        >Crea una cuenta</nuxt-link
      >
    </div>
  </FormulateForm>
</template>

<script>
import InputItem from '../Globals/InputItem.vue'
export default {
  name: 'LoginForm',
  components: { InputItem },
  data: () => ({
    formData: {},
    validateEmailOptions: [['required'], ['email']],
    validatePasswordOptions: [['required'], ['min', 4]],
  }),
  methods: {
    submit() {
      alert('passed validation')
      this.$formulate.reset('login')
    },
  },
}
</script>

<style></style>
