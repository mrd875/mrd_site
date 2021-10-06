<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-switch
            v-model="$vuetify.theme.dark"
            label="Dark Mode"
            hint="Enable Dark Mode"
            @click.stop="setDarkMode"
          />
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>Mason (mrd875)</span>
      <span style="text-align: right;float: right;margin-left: auto; margin-right: 0px;">Made with <a href="https://vuetifyjs.com/en/">Vuetify</a>.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Index',
          to: '/'
        },
        {
          icon: 'mdi-fire',
          title: 'Firebase Vue App',
          to: '/firebasevue'
        },
        {
          icon: 'mdi-code-array',
          title: 'CHelper',
          to: '/chelper'
        },
        {
          icon: 'mdi-apps',
          title: 'CoD Prototype Interface',
          to: '/481'
        },
        {
          icon: 'mdi-gamepad',
          title: 'Grand Yield',
          to: '/grandyield'
        },
        {
          icon: 'mdi-gamepad-variant',
          title: 'Darkest Depths',
          to: '/darkestdepths'
        },
        {
          icon: 'mdi-headphones',
          title: 'Intractable Dialogue System',
          to: '/vrspeech'
        },
        {
          icon: 'mdi-bowling',
          title: 'Hanabi',
          to: '/hanabi'
        }
      ],
      miniVariant: false,
      title: 'mrd875 Site'
    }
  },
  mounted () {
    this.$vuetify.theme.dark = this.$store.state.darkMode
  },
  methods: {
    setDarkMode () {
      this.$store.commit('setDarkMode', this.$vuetify.theme.dark)
    }
  }
}
</script>
