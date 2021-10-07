<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#105010"
      >
        <v-img
          src="/gwtk.png"
          height="300px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        />
        <v-card-title class="headline">
          Groupware Toolkit
        </v-card-title>
        <v-card-text>
          <p>
            A.<br>
          </p>
        </v-card-text>

        <v-divider class="mx-4" />

        <v-card-actions>
          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="accent-4 white--text"
              column
            >
              <v-chip
                href="https://github.com/mrd875/GroupwareToolkitClient"
              >
                <v-icon color="white">
                  mdi-github
                </v-icon>
                <span>&nbsp;GitHub</span>
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
      title: 'Groupware Toolkit'
    }
  }
}
</script>
