import { createNamespacedHelpers } from 'vuex';

import Avatar from '@/components/Avatar/index.vue';

const authNamespace = createNamespacedHelpers('auth');

export default {
  name: 'User',
  components: {
    Avatar
  },
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
