<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#709050"
      >
        <v-img
          src="/grandyield-big.png"
          height="300px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        />
        <v-card-title class="headline">
          Grand Yield
        </v-card-title>
        <v-card-text>
          <p>
            Grand Yield was a large group project for CMPT406 (Game development workshop). I was assigned Lead Developer for the project.<br>
            <br>
            The game was a competitive roundbased multiplayer farming game with many player interaction mechanics.<br>
            The goal was to score the most points by farming the correct type of crop based on the current list of orders.<br>
            <br>
            The game was developed using the <a href="https://unity.com/">Unity Game Engine</a> and used a networking library called <a href="https://mirror-networking.com/">Mirror</a>.
          </p>
        </v-card-text>
        <div style="height: 30px" />

        <v-row justify="center">
          <v-card width="80%">
            <v-img src="/grandyield.gif" />
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
                href="https://github.com/mrd875/406-2021-farm"
              >
                <v-icon color="white">
                  mdi-github
                </v-icon>
                <span>&nbsp;GitHub</span>
              </v-chip>

              <v-chip
                href="https://mennoknight42.itch.io/grand-yield"
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
      title: 'Grand Yield'
    }
  }
}
</script>
