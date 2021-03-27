<template>
  <!-- :single-select="singleSelect" -->
  <!-- show-select -->

  <v-flex>
    <!-- <dialog-confirm
      dialogTitle="Confirm"
      :dialogMsg="dialogMsg"
      :visible="dialogVisible"
      :onConfirm="dialogOnConfirm"
      :onDismiss="dialogOnDismiss"
    /> -->
    <!-- <v-btn
      style="margin-bottom: 20px"
      dark
      color="#2c3b39"
      fab
      small
      :to="`/admin/add/`"
    >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn> -->

    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-if="surveyList"
        :headers="headers"
        :items="surveyList"
        :search="search"
        item-key="name"
        class="elevation-1"
      >
      </v-data-table>
    </v-card>
  </v-flex>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
// import cookie from "js-cookie";
// import DialogConfirm from "@/components/DialogConfirm";

// import { URL } from "~/constants/url";

export default {
  computed: {
    ...mapGetters({
      surveyList: "survey/surveyList",
    }),
  },
  components: {},
  mounted() {
    this.getSurveyList();
  },
  data() {
    return {
      dialogMsg: "",
      dialogOnConfirm: () => {},
      dialogOnDismiss: () => {},
      dialogVisible: false,
      // singleSelect: false,
      // selected: [],
      headers: [
        { text: "Survey name", value: "name" },
        { text: "Budget", value: "budget" },
        { text: "Owner", value: "owner" },
      ],
      search: "",
      loading: false,
      admins: [],
    };
  },
  methods: {
    async getSurveyList() {
      try {
        this.$nuxt.$loading.start();
        const res = await this.$store.dispatch("survey/getSurveyList", {});
        console.log("res", res);
        this.$nuxt.$loading.finish();
        // this.$router.push({
        //   name: "index",
        // });
      } catch (error) {
        // this.$root.$loading.fail(error);
        this.isError = true;
      } finally {
      }
    },
  },
};
</script>