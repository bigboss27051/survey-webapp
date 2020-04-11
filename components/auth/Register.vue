<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              label="Email"
              name="login"
              prepend-icon="person"
              type="text"
              :rules="[v => !!v || 'Email is required']"
              required
            />
            <v-text-field
              id="password"
              label="Password"
              v-model="password"
              prepend-icon="lock"
              type="password"
              :rules="[v => !!v || 'Password is required']"
              required
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="login">Login</v-btn>
          <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <Loading :isLoading="isLoading" />
  </v-row>
</template>
<script>
import Vue from "vue";
import Loading from "@/components/common/Loading.vue";
export default {
  components: {
    Loading
  },
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      isLoading: false
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    async login() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;
        try {
          await this.$store.dispatch("auth/login", {
            email: this.email,
            password: this.password
          });
          this.isLoading = false;
          this.$router.push({
            name: "index"
          });
        } catch (error) {
          console.log("catch ", error);
          this.isLoading = false;
          // alert.error(error.message);
        }
      }
    }
  }
};
</script>