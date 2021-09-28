export const state = () => ({
  darkMode: false
})

export const mutations = {
  setDarkMode (state, to) {
    state.darkMode = to
  }
}
