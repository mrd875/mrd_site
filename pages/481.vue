<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#494F52"
      >
        <v-img
          src="/481-big.png"
          height="300px"
        />
        <v-card-title class="headline">
          CoD Prototype Interface
        </v-card-title>
        <v-card-text>
          <p>
            The CoD Prototype Interface was a duo project for CMPT481, the goal was to redesign an existing interface and improve it using concepts learned in-class and develop a prototype.<br>
            The project was developed using <a href="https://vuejs.org/">Vue</a>, <a href="https://nuxtjs.org/">Nuxt</a> and <a href="https://vuetifyjs.com/en/">Vuetify</a> (just like this site!).
          </p>
        </v-card-text>
        <div style="height: 30px" />

        <v-row justify="center">
          <v-card width="80%">
            <v-img src="/481.gif" />
            <v-card-subtitle>
              Background video removed to reduce size of GIF image.
            </v-card-subtitle>
          </v-card>
        </v-row>

        <div style="height: 30px" />
        <v-divider class="mx-4" />

        <v-card-actions>
          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="accent-4 white--text"
              column
            >
              <v-chip
                href="https://github.com/mrd875/481-Project"
              >
                <v-icon color="white">
                  mdi-github
                </v-icon>
                <span>&nbsp;GitHub</span>
              </v-chip>

              <v-chip
                href="https://mrd875.github.io/481-Project/"
              >
                <v-icon color="green">
                  mdi-apps
                </v-icon>
                <span>&nbsp;Live Site</span>
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-btn
            text
            color="teal accent-4"
            to="/"
            @click="reveal = true"
          >
            Go back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  head () {
    return {
      title: 'CoD Prototype Interface'
    }
  }
}
</script>
