<template>
  <div>
    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please waitting ...
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import ModalMsg from "@/components/common/ModalMsg";
export default {
  components: {
    ModalMsg
  },
  data: () => ({
    loading: false,
    isError: false,
    desc: ""
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
    fail(error) {
      this.loading = false;
      this.isError = true;
      console.log("sss", this.isError);
      this.desc = error?.message;
    }
  }
};
</script>