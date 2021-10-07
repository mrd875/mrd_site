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
            Groupware Toolkit is a <a href="https://nodejs.org/en/">NodeJS</a> library used for collaborative applications.<br>
            <br>
            The library used <a href="https://socket.io/">Socket.IO</a> as the transport, and was event driven for passing updates (deltas of state) to the clients.<br>
            <br>
            The main goal of the software was to efficiently create realtime applications without the use of a proprietary server.<br>
            <br>
            The project was created while employed at the <a href="https://hci.usask.ca/">HCI Lab</a> at the <a href="https://www.usask.ca/">University of Saskatchewan</a>.
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
