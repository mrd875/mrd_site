<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#202060"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="300px"
        />
        <v-card-title class="headline">
          CHelper
        </v-card-title>
        <v-card-text>
          <p>
            CHelper
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
              <v-chip>
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
      title: 'CHelper'
    }
  }
}
</script>
