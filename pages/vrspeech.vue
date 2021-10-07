<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#808080"
      >
        <v-img
          src="/vrspeech-big.png"
          height="300px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        />
        <v-card-title class="headline">
          Intractable Dialogue System
        </v-card-title>
        <v-card-text>
          <p>
            The game was developed using the <a href="https://unity.com/">Unity Game Engine</a>.
          </p>
        </v-card-text>
        <div style="height: 30px" />

        <v-row justify="center">
          <v-card width="80%">
            <v-img src="/vrspeech.gif" />
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
                href="https://github.com/UniversityOfSaskatchewanCMPT371/term-project-fall2019-team-1"
              >
                <v-icon color="white">
                  mdi-github
                </v-icon>
                <span>&nbsp;GitHub</span>
              </v-chip>

              <v-chip
                href="https://universityofsaskatchewancmpt371.github.io/term-project-fall2019-team-1/"
              >
                <v-icon color="white">
                  mdi-apps
                </v-icon>
                <span>&nbsp;More Info</span>
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
      title: 'Intractable Dialogue System'
    }
  }
}
</script>
