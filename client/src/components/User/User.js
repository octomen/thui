import { createNamespacedHelpers } from 'vuex';

const authNamespace = createNamespacedHelpers('auth');

export default {
  name: 'Avatar',
  mounted() {
    if (this.sessionId) {
      this.setUserInfo(this.sessionId);
    }
  },
  computed: {
    ...authNamespace.mapState([
      'user',
      'sessionId'
    ])
  },
  methods: {
    ...authNamespace.mapActions([
      'setUserInfo'
    ])
  }
};
