<template>
  <div class="login">
    <form @submit.prevent="loginHandler()">
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Email..." v-model="email" @input="$v.email.$touch()">
        <div v-if="$v.email.$error">
          <div class="field-error" v-if="!$v.email.required">Field is required</div>
          <div class="field-error" v-if="!$v.email.email">Email is invalid</div>
        </div>
        <template v-if="errors && errors.email">
          <div class="field-error" v-for="(error, index) in errors.email" :key="index">
            {{error}}
          </div>
        </template>
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Password..." v-model="password" @input="$v.password.$touch()">
        <!-- Vuelidate Errors -->
        <div v-if="$v.password.$error">
          <div class="field-error" v-if="!$v.password.required">Field is required</div>
          <div class="field-error" v-if="!$v.password.minLength">Password should be at least 8 characters long</div>
        </div>
        <!-- API Errors -->
        <template v-if="errors && errors.password">
          <div class="field-error" v-for="(error, index) in errors.password" :key="index">
            {{error}}
          </div>
        </template>
      </div>
      <button :disabled="$v.$invalid">Login</button>
    </form>
  </div>
</template>

<script>
  import authMixin from '@/mixins/auth'
  import { required, email, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'Login',
    mixins: [authMixin],
    data() {
      return {
        email: null,
        password: null,
        errors: null
      }
    },
    methods: {
      loginHandler() {
        let dataToSend = {
          email: this.email,
          password: this.password
        }

        this.login(dataToSend)
          .then(() => {
            this.$router.push('/tickets');
          })
          .catch(err => {
            this.errors = err.response.data.errors;
            setTimeout(() => {
              this.errors = null;
            }, 5000);
          })
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  }
</script>

<style scoped>
  form {
    width: 800px;
    margin: 50px auto;
  }

  .field {
    width: 100%;
    margin-bottom: 20px;
  }

  .field label {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
  }

  .field input {
    width: 100%;
    font-size: 18px;
    padding: 5px 10px;
  }

  .field-error {
    border-radius: 8px;
    border: 1px solid red;
    background: rgb(255, 235, 235);
    color: red;
    padding: 5px 10px;
    font-size: 18px;
    margin-top: 5px;
    text-align: center;
  }

  button {
    font-size: 25px;
  }
</style>