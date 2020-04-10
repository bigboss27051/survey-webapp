<template>
  <v-app light>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" :mini-variant="false" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn icon @click="goToLogin">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    dialog: false,
    clipped: true,
    drawer: true,
    fixed: true,
    items: [
      { icon: "mdi-check-circle", text: "Survey", to: "/survey/createSurvey" },
      { icon: "mdi-logout", text: "Logout", to: "/" }
    ],
    title: "DQ Survey"
  }),
  methods: {
    goToLogin() {
      this.$router.push("/authentication/login");
    }
  }
};
</script>
