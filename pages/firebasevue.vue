<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#1C4F10"
      >
        <v-img
          src="/vueapp.png"
          height="300px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        />
        <v-card-title class="headline">
          Firebase Vue App
        </v-card-title>
        <v-card-text>
          <p>
            A realtime webapp that had authentication and managed entries with a chat/log.<br>
            <br>
            This project was developed using <a href="https://vuejs.org/">Vue</a>, <a href="https://firebase.google.com/">Google Firebase</a> and <a href="https://router.vuejs.org/">the Vue Router</a>.<br>
            <br>
            The purpose was to learn the technologies as required for my Summer 2018 employment at the <a href="https://hci.usask.ca/">HCI Lab</a> at the <a href="https://www.usask.ca/">University of Saskatchewan</a>.<br>
            <br>
            Using <a href="https://www.youtube.com/watch?v=sYNjEzcOTOs">this</a>, a YouTube video guide series, it took around a week and a half to develop and complete.
          </p>
        </v-card-text>
        <div style="height: 30px" />

        <v-row justify="center">
          <v-card width="80%">
            <v-img src="/vueapp.gif" />
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
                href="https://github.com/mrd875/VueApp"
              >
                <v-icon color="white">
                  mdi-github
                </v-icon>
                <span>&nbsp;GitHub</span>
              </v-chip>

              <v-chip
                href="https://mrd875.github.io/VueApp"
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
      title: 'Firebase Vue App'
    }
  }
}
</script>
