export const incrementCounter = function ({commit, state}) {
    commit('INCREMENT', 1)
}

export const resetCounter = function ({commit, state}) {
    commit('RESET')
}