/* eslint no-param-reassign: 0 */

import { fetchThemes } from '../../api';

export const themesState = {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    newThemes: state => state.list.filter(theme => !theme.id),
    savedThemes: state => state.list.filter(theme => theme.id)
  },
  mutations: {
    updateList: (state, payload) => {
      state.list = payload.themes;
    },
    addTheme: (state, payload) => {
      const newTheme = {
        id: undefined,
        title: payload.title,
        description: payload.description
      };

      state.list.push(newTheme);
    }
  },
  actions: {
    async fetchThemes({ commit }, sessionId) {
      const themes = await fetchThemes(sessionId);
      if (themes && themes.length) {
        commit('updateList', { themes });
      }
    }
  }
};
