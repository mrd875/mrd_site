<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#2020B0"
      >
        <v-img
          src="/hanabi.png"
          height="300px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        />
        <v-card-title class="headline">
          Hanabi
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
            />
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
      title: 'Hanabi'
    }
  }
}
</script>
