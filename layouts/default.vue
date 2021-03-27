<template>
  <v-app light>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="false"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <template v-for="(item, i) in items">
          <v-list-item v-if="!item.children" link :key="i" :to="item.to">
            <v-list-item-action>
              <v-icon>mdi-label</v-icon>
            </v-list-item-action>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>

          <v-list-group
            :key="i"
            v-if="item.children"
            router
            exact
            id="list-group-vending"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.text" />
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child, cIndex) in item.children"
              link
              :key="cIndex"
              :to="child.to"
            >
              <v-list-item-action>
                <v-icon>mdi-label</v-icon>
              </v-list-item-action>
              <v-list-item-title v-text="child.text"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn class="ma-2" value="recent" @click="goToLogin">
        <span>Login</span>
      </v-btn>
      <v-btn class="ma-2" value="recent" @click="goToLogin">
        <span>Register</span>
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
    source: String,
  },
  data: () => ({
    dialog: false,
    clipped: true,
    drawer: true,
    fixed: true,
    items: [
      // {
      //   icon: "mdi-check-circle",
      //   text: "Survey",
      //   to: "/survey/createSurvey",
      // },
      {
        icon: "mdi-check-circle",
        text: "Survey",
        to: "/survey/createSurvey",
        children: [
          {
            icon: "mdi-check-circle",
            text: "Create survey",
            to: "/survey/createSurvey",
          },
          {
            icon: "mdi-check-circle",
            text: "View survey",
            to: "/survey/createSurvey",
          },
        ],
      },
      { icon: "mdi-logout", text: "Logout", to: "/" },
    ],
    title: "DQ Survey",
  }),
  methods: {
    goToLogin() {
      this.$router.push("/authentication/login");
    },
  },
};
</script>
