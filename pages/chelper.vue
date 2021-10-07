<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#202060"
      >
        <v-img
          src="/chelper-code.png"
          height="300px"
        />
        <v-card-title class="headline">
          CHelper
        </v-card-title>
        <v-card-text>
          <p>
            CHelper is a library I wrote in pure portable C (c99).<br>
            It has many data structures such as LinkedLists AVL Trees, Heaps and more. It even has JSON capabilities such as parsing and stringifiying.<br>
            The library even handled deep copying and recursive data freeing.<br>
            Used in a few assignments for CMPT that required we used C code with no external third party code.
          </p>
        </v-card-text>
        <div style="height: 30px" />

        <v-row justify="center">
          <v-card width="80%">
            <v-img src="/chelper-testoutput.png" />
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
                href="https://github.com/mrd875/CHelper"
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
      title: 'CHelper'
    }
  }
}
</script>
