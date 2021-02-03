<template>
  <v-card  class="mx-auto my-12" max-width="374">
    <v-container>
      <v-form ref="form"  lazy-validation>
        <v-row justify="center" align="center" class="spacing-playground pa-5">
          <h3>Login Form</h3>
        </v-row>
        <v-row justify="center" align="center" class="spacing-playground pa-5">
          <v-avatar color="blue darken-2" size="68">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-row>
        <v-text-field
          v-model="name"
          :counter="40"
          :rules="nameRules"
          outlined
          dense
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :counter="40"
          :rules="passwordRules"
          label="Pass Word"
          outlined
          dense
          required
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-row
          align="center"
          justify="space-around"
          class="spacing-playground pa-6"
        >
          <v-btn depressed color="primary" class="pa-6" block @click="submitFormLogin" >
            Submit
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'Login',
  data: () => {
    return ({
      valid: true,
      name: '',
      password: '',
      showPassword: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      passwordRules: [v => !!v || 'Pass Word is required']
    })
  },

  methods: {

    submitFormLogin: function () {
      // `this` trỏ tới đối tượng vm

      console.log('name===>', this.name)
      console.log('password===>', this.password)
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
