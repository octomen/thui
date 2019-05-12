import Vue from 'vue';
import Vuex from 'vuex';

import { themesState } from './themes';
import { authState } from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    themes: themesState,
    auth: authState
  }
});
