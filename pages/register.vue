<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <FormContainer>
      <Logo />
      <register-form />
    </FormContainer>
  </div>
</template>

<script>
import RegisterForm from '../components/register/RegisterForm.vue'
export default {
  components: { RegisterForm },
}
</script>

<style></style>
