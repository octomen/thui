/* global location */
/* eslint no-restricted-globals: ["off", "location"] */

import cookies from 'browser-cookies';
import queryString from 'query-string';
import { mapState } from 'vuex';

import ErrorPage from '@/components/ErrorPage/index.vue';

export default {
  components: {
    ErrorPage
  },
  computed: {
    ...mapState([
      'auth'
    ])
  },
  methods: {
    setSessionToStoreId: async function setSessionToStoreId() {
      const sessionId = cookies.get('Authentication');

      if (!sessionId) {
        const { token } = queryString.parse(location.search);
        await this.$store.dispatch('auth/signIn', token);

        return cookies.set('Authentication', this.auth.sessionId, { expires: 1 });
      }

      return this.$store.commit('auth/setSessionId', { sessionId });
    }
  },
  async mounted() {
    this.setSessionToStoreId();
  }
};
