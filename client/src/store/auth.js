import { getSessionIdByToken } from '../../api';

export const authState = {
  namespaced: true,
  state: {
    sessionId: '',
    user: {
      login: ''
    }
  },
  mutations: {
    setSessionId(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.sessionId = payload.sessionId;
    }
  },
  actions: {
    async signIn({ commit }, token) {
      const sessionId = await getSessionIdByToken(token);

      commit('setSessionId', { sessionId });
    }
  }
};
