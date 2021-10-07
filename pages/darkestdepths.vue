<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#202020"
      >
        <v-img
          src="/darkestdepthsmenu.png"
          height="300px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        />
        <v-card-title class="headline">
          Darkest Depths
        </v-card-title>
        <v-card-text>
          <p>
            Darkest Depths was a group project for CMPT306 (Game development).<br>
            <br>
            It is a rougelike singleplayer videogame where the goal is to capture the key, avoid enemies, gather resources and build to the mining lift.<br>
            <br>
            The game gets progressively more difficult and rewards the player with powerups as they progress.<br>
            <br>
            The game was developed using the <a href="https://unity.com/">Unity Game Engine</a>.
          </p>
        </v-card-text>
        <div style="height: 30px" />

        <v-row justify="center">
          <v-card width="80%">
            <v-img src="/darkest.gif" />
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
                href="https://github.com/teddy2021/CMPT306GROUP12PROJECT"
              >
                <v-icon color="white">
                  mdi-github
                </v-icon>
                <span>&nbsp;GitHub</span>
              </v-chip>

              <v-chip
                href="https://github.com/mrd875/CMPT306GROUP12PROJECT/releases/tag/Final_Build"
              >
                <v-icon color="green">
                  mdi-apps
                </v-icon>
                <span>&nbsp;Download</span>
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
      title: 'Darkest Depths'
    }
  }
}
</script>
