<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        dark
        color="#A02020"
      >
        <v-img
          src="/index.png"
          height="300px"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          class="white--text align-end"
        >
          <v-card-title class="headline">
            Welcome to my Site!
          </v-card-title>
        </v-img>

        <v-card-text>
          <p>
            I am a Computer Scientist with a Bachelor's Degree creating apps with all kinds of technologies for fun, experience and utility.
          </p>
        </v-card-text>
      </v-card>

      <div style="height: 30px" />

      <v-card
        color="#385F73"
        dark
      >
        <v-card-title class="text-h5">
          Projects
        </v-card-title>

        <v-card-subtitle>
          Here is a list of projects that I have created.
        </v-card-subtitle>

        <v-col
          v-for="(item, i) in projects"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            :to="item.to"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                />

                <v-card-subtitle v-text="item.subtitle" />
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-card>

      <div style="height: 30px" />

      <v-card
        color="#545454"
        dark
      >
        <v-card-title class="text-h5">
          Links
        </v-card-title>

        <v-card-subtitle>
          List of links!
        </v-card-subtitle>

        <v-col
          v-for="(item, i) in links"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            :href="item.href"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                />

                <v-card-subtitle v-text="item.subtitle" />
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    projects: [
      {
        color: '#1C4F10',
        src: '/firebasevueapp.png',
        title: 'Firebase Vue App',
        subtitle: 'A realtime webapp managing entries',
        to: '/firebasevue'
      },
      {
        color: '#202060',
        src: '/c.png',
        title: 'CHelper',
        subtitle: 'A library for C with data structures and algorithms',
        to: '/chelper'
      },
      {
        color: '#494F52',
        src: '/481.png',
        title: 'CoD Prototype Interface',
        subtitle: 'A prototype project for CMPT481',
        to: '/481'
      },
      {
        color: '#709050',
        src: '/grandyield.png',
        title: 'Grand Yield',
        subtitle: 'A multiplayer competitive farming game for CMPT406',
        to: '/grandyield'
      },
      {
        color: '#202020',
        src: '/miner_dwarf.png',
        title: 'Darkest Depths',
        subtitle: 'A rougelike game for CMPT306',
        to: '/darkestdepths'
      },
      {
        color: '#808080',
        src: '/vrspeech.png',
        title: 'Intractable Dialogue System',
        subtitle: 'An intractable dialogue system for Unity (VR) for CMPT371',
        to: '/vrspeech'
      },
      {
        color: '#2020B0',
        src: '/hanabi.png',
        title: 'Hanabi',
        subtitle: 'A JavaFX client for a Hanabi Game server for CMPT370',
        to: '/hanabi'
      },
      {
        color: '#105010',
        src: '/node.png',
        title: 'Groupware Toolkit',
        subtitle: 'A NodeJS library for efficient realtime communication',
        to: '/gwtk'
      }
    ],
    links: [
      {
        color: '#999999',
        src: '/github.svg',
        title: 'GitHub',
        subtitle: 'My personal GitHub repos',
        href: 'https://github.com/mrd875'
      }
    ]
  })
}
</script>
