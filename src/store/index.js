import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    count: 0
}


const mutations = {
    INCREMENT (state, amount) {
        state.count = state.count + amount
    },

    RESET (state) {
        state.count = 0
    }

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})