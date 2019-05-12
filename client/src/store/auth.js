import {
  getSessionIdByToken,
  getUserInfo
} from '../../api';

export const authState = {
  namespaced: true,
  state: {
    sessionId: '',
    user: {
      id: -1,
      name: '',
      avatar: ''
    }
  },
  mutations: {
    setSessionId(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.sessionId = payload.sessionId;
    },
    setUser(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.user = { ...state.user, ...payload };
    }
  },
  actions: {
    async signIn({ commit, dispatch }, token) {
      const sessionId = await getSessionIdByToken(token);

      commit('setSessionId', { sessionId });

      dispatch('setUserInfo', sessionId);
    },
    async setUserInfo({ commit }, sessionId) {
      const user = await getUserInfo(sessionId);

      commit('setUser', user);
    }
  }
};
